let images = [
    `https://images.unsplash.com/photo-1572872137284-96787b3c57dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`,
    `https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg`,
    `https://cdn.pixabay.com/photo/2022/09/23/18/40/biology-7475005_1280.jpg`,
    `https://cdn.pixabay.com/photo/2019/04/08/08/53/cat-4111617_1280.jpg`,
    `https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_1280.jpg`,
    `https://cdn.pixabay.com/photo/2017/01/21/18/05/room-1997885_1280.jpg`,
    `https://cdn.pixabay.com/photo/2021/08/20/22/05/flowers-6561379_1280.jpg`,
    `https://cdn.pixabay.com/photo/2022/10/28/10/22/cat-7552840_1280.jpg`,
    `https://burst.shopifycdn.com/photos/a-trio-of-green-candles.jpg?width=925&format=pjpg&exif=1&iptc=1`,
    `https://cdn.stocksnap.io/img-thumbs/960w/shark-sea_UKZCDUVYZS.jpg`,
    `https://cdn.stocksnap.io/img-thumbs/960w/ladybug-insect_6HVKUBCSHQ.jpg`,
    `https://img.freepik.com/premium-photo/microphone-stage-against-background-auditorium_152904-110.jpg?w=740`,
    `https://img.freepik.com/free-photo/silhouette-woman-singing-green-background_1160-216.jpg?w=740&t=st=1685445776~exp=1685446376~hmac=6f6ab69809e578951b302f12cde86780d6ffaeb721c6b252d6de60a4d8c4287f`,
    `https://img.freepik.com/free-photo/venetian-mask-eyes-black-fabric_23-2147595757.jpg?w=740&t=st=1685445836~exp=1685446436~hmac=3cdd3da00ebc82b4fa6bf992f412b93d4bd18595ea8c7f23d410f7b1cb9a8012`,
    `https://img.freepik.com/free-photo/elegant-mysterious-black-mask-with-feathers_23-2148756029.jpg?w=740&t=st=1685445873~exp=1685446473~hmac=735980846f66fd9523e0a285e35d21e421c33bc1fd732465839ff72642544905`,
    `https://img.freepik.com/free-photo/abstract-bokeh-background-with-colorful-lights_23-2147815161.jpg?w=740&t=st=1685445977~exp=1685446577~hmac=a21c19cbd76e9eee378c798b2faa203c308e7a54af3ec4ac1e68efc3221d2d4d`,
    `https://img.freepik.com/premium-photo/ghost-pumpkins-halloween-background_152404-10139.jpg?w=740`

];

let image;
const change_img = () => {
    return images[Math.floor(Math.random() * images.length)]
}
console.log(change_img())

let url = "https://kontests.net/api/v1/all"


let response = fetch(url)
response.then((value) => {
    return value.json()
}).then((v) => {
    console.log(v)
    let bg_Img = change_img();
    let c = 0;
    ihtml = " "
    for (item in v) {
        if (c == 1) {
            c = 0;
            bg_Img = change_img();
        }
        c++;
        console.log(v[item])
        ihtml +=
            `<div class="card my-2 mx-2 bg-secondary text-white" style="width: 16rem;">
        <img src="${bg_Img}" id="card" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${v[item].name}</h5>
            <p >Start time : ${v[item].start_time}</p>
            <p> End time : ${v[item].end_time}</p>
            <p>Duration of contest : ${v[item].duration}</p>
            <a href="${v[item].url}" class="btn btn-primary">Visit contest</a>
        </div>
    </div> 
    `

    }
    cardContainer.innerHTML = ihtml
})
