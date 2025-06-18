export default class WidgetCollapsible {
  constructor() {
    this.container = document.querySelector(".main_container");
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initWidget();
    });
  }

  initWidget() {
    if (!this.container) return;
    const widgetCollapsibleHtml = `
    <div data-widget="widgetCollapsible" class="widget widget_collapsible">       
      <div class="widget_controls"> 
        <button data-id="widgetButton" class="widget_button">Collapse</button> 
      </div>
      <div data-id="widgetFooter" class="widget_footer collapsed">         
        <div class="widget_footer_string">
        Anim pariatur cliche reprehenderit, enim eiusmod hihg life
        accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
        craft beer labore wes anderson cred nesciunt sapiente ea proident.        
        </div>
      </div> 
    </div>
    `;

    this.container.insertAdjacentHTML("beforeEnd", widgetCollapsibleHtml);

    this.container
      .querySelector("[data-widget=widgetCollapsible]")
      .addEventListener("click", (evt) => {
        if (evt.target.dataset.id !== "widgetButton") return;
        const widgetFooter = evt.currentTarget.querySelector(
          "[data-id=widgetFooter]"
        );
        widgetFooter.classList.toggle("collapsed");
        widgetFooter.classList.toggle("show");
      });
  }
}

