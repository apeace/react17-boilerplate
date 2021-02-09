import * as React from "react"
import * as moment from "moment"

export class Time extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            time: moment().format(),
            interval: null,
        }
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    time: moment().format(),
                })
            }, 1000),
        })
    }

    componentWillUnmount() {
        if (this.state.interval) {
            clearInterval(this.state.interval)
        }
    }

    render() {
        return <p>{this.state.time}</p>
    }
}
