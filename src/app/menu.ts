export let menu=[{
    name:"Spaghetti",
    image:"https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    description:"with tomato sauce",
    price:14.99,
    availability:true,

},{
    name:"Italian sandwich",
    image:"https://fullsuitcase.com/wp-content/uploads/2020/06/Authentic-Italian-food-by-region.jpg",
    description:"tasty",
    price:10,
    availability:false,

},{
    name:"Mozarella Tomato",
    image:"https://img.theculturetrip.com/650x/wp-content/uploads/2017/11/latrat.jpg",
    description:"with best products",
    price:16,
    availability:true,

},{
    name:"Pasta",
    image:"https://cdn.vox-cdn.com/thumbor/TqL0TO6kvt7X_Uf0M18m8eLm3Iw=/0x0:2000x1333/1200x900/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/61523879/luogo_nashville_duck_ragu_official.27.jpeg",
    description:"one of the best",
    price:11.50,
    availability:false,

},{
    name:"Pizza",
    image:"https://bstatic.com/data/xphoto/1182x887/222/22281452.jpg?size=S",
    description:"available with onions",
    price:17,
    availability:true,

},{
    name:"Meat",
    image:"https://media.timeout.com/images/105872817/image.jpg",
    description:"muy bueno",
    price:10.50,
    availability:false,

},
];

 export interface IMenu {
    name:string;
    image:string;
    description:string;
    price:number;
    availability:boolean;
}



