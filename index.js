import pptxgen from "pptxgenjs";

// 1. Create a Presentation
let pres = new pptxgen();

// 2. Add a Slide to the presentation
let slide1 = pres.addSlide("MASTER_NAME");
let slide2 = pres.addSlide('Second Slide');
// 3. Add 1+ objects (Tables, Shapes, etc.) to the Slide
slide2.addImage({path:"https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",x:1,y:2}).addImage({path:"https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",x:5,y:3});
slide1.addText("Hello World from PptxGenJS...", {
    x: 1.5,
    y: 1.5,
    color: "363636",
    fill: { color: "F1F1F1" },
    align: pres.AlignH.center,
});
slide2.background = { color: "F1F1F1"};
slide2.color = "696969";
slide2.background = { path: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"};
// 4. Save the Presentation
pres.writeFile({ fileName: "Sample Presentation.pptx" });