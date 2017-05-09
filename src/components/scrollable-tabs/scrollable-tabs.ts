import { Directive, AfterViewInit, ElementRef, Renderer, Input } from '@angular/core';
import { Tabs, Tab } from 'ionic-angular'

@Directive({
  selector: '[scrollable-tabs]',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ScrollableTabs implements AfterViewInit {
  @Input('scrollable-tabs') ionTabs: Tabs;
  @Input('opts') opts: any = {};

  currentTabIndex: number;
  tabs: Tab[] = [];
  nativeTabbar: HTMLElement;

  constructor(public elemRef: ElementRef, public renderer: Renderer) {
  }

  ngOnChanges(changes: any) {
    if (changes.hasOwnProperty('opts')) {
      if (changes['opts'].currentValue.refresh) {
        setTimeout(() => {
          this.setAnchorStyles();
          this.scrollToselectedTab();
        }, 300);
      }
    }
  }

  ngAfterViewInit() {
    this.nativeTabbar = this.ionTabs._tabbar.nativeElement;
    this.tabs = this.ionTabs._tabs;
    this.currentTabIndex = typeof (this.ionTabs.selectedIndex) == "undefined" ? 0 : this.ionTabs.selectedIndex;

    this.ionTabs.ionChange.subscribe(() => {
      this.scrollToselectedTab();
    })

    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].ionSelect.subscribe(() => {
        this.currentTabIndex = i;
      });
    }

    // set tabbar overflow-x: scroll
    this.renderer.setElementStyle(this.nativeTabbar, "overflow-x", "scroll");

    // set tabbar overflow-y: hidden
    this.renderer.setElementStyle(this.nativeTabbar, "overflow-y", "hidden");

    this.setAnchorStyles();

    this.scrollToselectedTab();
  }

  onResize(event: Event) {
    this.setAnchorStyles();
    setTimeout(() => {
      this.scrollToselectedTab();
    }, 300);
  }

  setAnchorStyles() {
    if (typeof (this.nativeTabbar) != "undefined") {
      let tabBar_width = this.nativeTabbar.clientWidth;
      let numOfTabs = this.tabs.length;
      let numOfVisibleAnchors = 0;
      let sumOfVisibleAnchorWidth = 0;

      // loop through tab elements in tabs
      for (let i = 0; i < numOfTabs; i++) {
        let element = this.nativeTabbar.children[i];
        // when Tab visible (effecting show property)
        if (this.tabs[i]._isShown) {
          numOfVisibleAnchors++;
          // set <a> display: inline-table
          this.renderer.setElementStyle(element, 'display', 'inline-table');
          // set <a> width: 6rem
          this.renderer.setElementStyle(element, 'width', '6rem');
          // extra padding for title-only tags only
          if (element.classList.contains("has-title-only")) {
            // set <a> padding-top: 1.5rem
            this.renderer.setElementStyle(element, 'padding-top', '1.5rem');
          }
          sumOfVisibleAnchorWidth += element.clientWidth;
        }
        else {
          // set <a> display: none
          this.renderer.setElementStyle(element, 'display', 'none');
        }
      }

      // to prevent extra space at end
      if (sumOfVisibleAnchorWidth < tabBar_width) {
        let anchorWidth = tabBar_width / numOfVisibleAnchors;
        for (let i = 0; i < numOfTabs; i++) {
          let element = this.nativeTabbar.children[i];
          // when Tab not not visible effecting show property
          if (!element.classList.contains("tab-hidden")) {
            this.renderer.setElementStyle(element, 'width', anchorWidth + 'px');
          }
        }
      }
    }
  }

  scrollToselectedTab() {
    if (typeof this.nativeTabbar != 'undefined') {
      let tabBar_width = this.nativeTabbar.clientWidth;
      let selectedTab = this.nativeTabbar.children[this.currentTabIndex];
      let selectedTab_Width = selectedTab.clientWidth;
      let selectedTab_LeftOffset = document.getElementById(selectedTab.id).offsetLeft;
      let selectedTab_mid = selectedTab_LeftOffset + (selectedTab_Width / 2);
      let newScrollLeft = selectedTab_mid - (tabBar_width / 2);

      this.scrollXTo(newScrollLeft, 300).then(() => { });
    }
  }

  scrollXTo(x: number, duration: number = 300): Promise<any> {
    // scroll animation loop w/ easing
    let tabbar = this.nativeTabbar;

    if (!tabbar) {
      // invalid element
      return Promise.resolve();
    }
    x = x || 0;

    let originalRaf = (window[window['Zone']['__symbol__']('requestAnimationFrame')] || window[window['Zone']['__symbol__']('webkitRequestAnimationFrame')]);
    let nativeRaf = originalRaf !== undefined ? originalRaf['bind'](window) : window.requestAnimationFrame.bind(window);
    let fromX = tabbar.scrollLeft;
    let maxAttempts = (duration / 16) + 100;

    return new Promise(resolve => {
      let startTime: number;
      let attempts = 0;
      let isPlaying: boolean;

      // scroll loop
      function step() {
        attempts++;

        if (!tabbar || !isPlaying || attempts > maxAttempts) {
          isPlaying = false;
          resolve();
          return;
        }

        let time = Math.min(1, ((Date.now() - startTime) / duration));

        // where .5 would be 50% of time on a linear scale easedT gives a
        // fraction based on the easing method
        let easedT = (--time) * time * time + 1;

        if (fromX !== x) {
          tabbar.scrollLeft = Math.floor((easedT * (x - fromX)) + fromX);
        }

        if (easedT < 1) {
          nativeRaf(step);
        } else {
          // done
          resolve();
        }
      }

      // start scroll loop
      isPlaying = true;

      // chill out for a frame first
      nativeRaf(() => {
        startTime = Date.now();
        nativeRaf(step);
      });

    });
  }


}
