import React, {Component}     from "react";
import Navbar                 from "./Navbar";
import Sidebar                from "./Sidebar";
import { Route, Routes }      from 'react-router'
import AdminRoutes            from '../AdminRoutes'
import Footer from "./Footer";


class Master extends Component {
    render() {
        let dataRoutes = AdminRoutes();
        return (
            <div className="wrapper">
                <Navbar/>
                <Sidebar/>
                <div className="content-wrapper">
                    <Routes>
                        {dataRoutes.map((data) =>
                            <Route path={data.path} element={<data.component />} key={data.id} />
                        )}
                    </Routes>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default Master;