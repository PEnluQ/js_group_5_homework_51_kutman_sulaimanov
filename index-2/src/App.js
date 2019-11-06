import React, {Component, Fragment} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
        <Fragment>
          <Header/>

          <Content img='http://glavchudo.ru/image/cache/catalog/zivotnim/194422_ep9otswqjv_1445009376193218554-800x800.jpg'
                   name='Кот'
                   text='Пират, требует только Вискас. Исполняется 4 года'
          />
          <Content img='https://cdn.pixabay.com/photo/2018/11/13/16/17/puppy-3813393_960_720.jpg'
                   name='Собака'
                   text='Барон, любит капусту. 1 годик'
          />
          <Content img='https://likehamster.ru/wp-content/uploads/2019/01/6_result-7.jpg'
                   name='Хомяк'
                   text='Шарик, питается кукурузой. Пол года'
          />

          <Sidebar/>

          <Footer/>
        </Fragment>
    );
  }
}

export default App;
