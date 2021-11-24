import { React } from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';


const Home = () => {

    var newItems = [];
    var featuredProducts = [];

    for (let num = 0; num < 8; num++) {
        newItems[num] = {
            "name": "name" + num,
            "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22181%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20181%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d110206f1%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d110206f1%22%3E%3Crect%20width%3D%22286%22%20height%3D%22181%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5234375%22%20y%3D%2297.8171875%22%3E286x181%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
            "price": 12.55,
            "description": "lorem ipsum lsldf lorelmo lbilk;aiojnnbiulklkniubhu aiosdhf aosidjf sldfjlalksdf lksjdfl alkhdfi dfjasld lkfjifein aldslldfi "
        }
    }


    for (let num = 0; num < 15; num++) {
        featuredProducts[num] = {
            "name": "Carousel" + num,
            "image": "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22181%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20181%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d110206f1%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d110206f1%22%3E%3Crect%20width%3D%22286%22%20height%3D%22181%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5234375%22%20y%3D%2297.8171875%22%3E286x181%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
            "price": 12.55,
            "description": "lorem ipsum lsldf lorelmo lbilk;aiojnnbiulklkniubhu aiosdhf aosidjf sldfjlalksdf lksjdfl alkhdfi dfjasld lkfjifein aldslldfi "
        }
    }
    return (

        <div xs={12} md={6} lg={1} className="root ">

            <div><h1>Home</h1></div>

            <div style={{ background: 'limegreen', width:'auto', alignItems:'center', margin: "20px" }}>
                <Carousel>
                    {
                        featuredProducts.map(x =>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={x.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{x.name}</h3>
                                    <p>{x.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
            </div>


            <div class="" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    newItems.map(x =>
                        <Card style={{ width: '18rem', margin: "15px" }}>
                            <Card.Img variant="top" src={x.image} />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                    {x.description}
                                </Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>




    );
}

export default Home;