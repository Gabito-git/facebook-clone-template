import React from 'react'
import Histories from './Histories'
import Postbox from './Postbox'
import PostScreen from './PostScreen'
import Sidebar from './Sidebar'
import TopNavigation from './TopNavigation'
import Widget from './Widget'

const MainScreen = () => {
    return (
        <div className="mainscreen">
            <TopNavigation />
            <div className="mainscreen__body">
                <aside className="mainscreen__left">
                    <Sidebar />
                </aside>
                <main className="mainscreen__center">
                    <div className="mainscreen__center-content">
                        <Histories />
                        <Postbox />
                        <PostScreen />
                    </div>
                </main>
                <aside className="mainscreen__right">
                    <Widget />
                    
                </aside>
            </div>
        </div>
    )
}

export default MainScreen
