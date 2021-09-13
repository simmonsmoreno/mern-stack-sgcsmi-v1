import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Info extends Component {
    render() {
        return (
            <div>
                {/* The timeline */}
                <div className="timeline timeline-inverse">
                    {/* timeline time label */}
                    <div className="time-label">
                        <span className="bg-danger"> 10 Feb. 2014 </span>
                    </div>
                    {/* /.timeline-label */}
                    {/* timeline item */}
                    <div>
                        <i className="fas fa-envelope bg-primary"></i>

                        <div className="timeline-item">
                            <span className="time"><i className="far fa-clock"></i> 12:05</span>

                            <h3 className="timeline-header"><Link to="#">Support Team</Link> sent you an email</h3>

                            <div className="timeline-body">
                                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                quora plaxo ideeli hulu weebly balihoo...
                                                                </div>
                            <div className="timeline-footer">
                                <Link to="#" className="btn btn-primary btn-sm">Read more</Link>
                                <Link to="#" className="btn btn-danger btn-sm">Delete</Link>
                            </div>
                        </div>
                    </div>
                    {/* END timeline item */}
                    {/* timeline item */}
                    <div>
                        <i className="fas fa-user bg-info"></i>

                        <div className="timeline-item">
                            <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

                            <h3 className="timeline-header border-0">
                                <Link to="#">Sarah Young</Link> accepted your friend request
                            </h3>
                        </div>
                    </div>
                    {/* END timeline item */}
                    {/* timeline item */}
                    <div>
                        <i className="fas fa-comments bg-warning"></i>

                        <div className="timeline-item">
                            <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

                            <h3 className="timeline-header"><Link to="#">Jay White</Link> commented on your post</h3>

                            <div className="timeline-body">
                                Take me to your leader!
                                Switzerland is small and neutral!
                                We are more like Germany, ambitious and misunderstood!
                            </div>
                            <div className="timeline-footer">
                                <Link to="#" className="btn btn-warning btn-flat btn-sm">View comment</Link>
                            </div>
                        </div>
                    </div>
                    {/* END timeline item */}
                    {/* timeline time label */}
                    <div className="time-label">
                        <span className="bg-success">
                            3 Jan. 2014
                        </span>
                    </div>
                    {/* /.timeline-label */}
                    {/* timeline item */}
                    <div>
                        <i className="fas fa-camera bg-purple"></i>

                        <div className="timeline-item">
                            <span className="time"><i className="far fa-clock"></i> 2 days ago</span>

                            <h3 className="timeline-header"><Link to="#">Mina Lee</Link> uploaded new photos</h3>

                            <div className="timeline-body">
                            </div>
                        </div>
                    </div>
                    {/* END timeline item */}
                    <div>
                        <i className="far fa-clock bg-gray"></i>
                    </div>
                </div>

            </div>
        )
    }
}
