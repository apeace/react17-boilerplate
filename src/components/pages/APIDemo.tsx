import * as React from "react"
import { API } from "../../lib/ts/api"

export interface APIDemoProps {
    api: API
}

interface State {
    loading: boolean
    names: string[]
    error: boolean
}

export class APIDemo extends React.Component<APIDemoProps, State> {
    constructor(props: APIDemoProps) {
        super(props)
        this.state = {
            loading: true,
            names: [],
            error: false,
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.props.api
            .getNames()
            .then((names) => {
                this.setState({
                    names,
                    error: false,
                    loading: false,
                })
            })
            .catch((e) => {
                console.error(e)
                this.setState({ error: true, loading: false })
            })
    }

    render() {
        if (this.state.error) {
            return <p>Error. (try adding ?fake to the URL to access fake mode)</p>
        }
        if (this.state.loading) {
            return <p>Loading...</p>
        }
        return (
            <ul>
                {this.state.names.map((name, idx) => (
                    <li key={idx}>{name}</li>
                ))}
            </ul>
        )
    }
}
