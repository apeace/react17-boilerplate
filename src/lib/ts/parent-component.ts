import { ReactNode } from "react"

// ParentComponent defines the properties that a "parent" React component
// needs in order for children to be passed in. For example:
//
//    interface MyProps extends ParentComponent {}
//    const MyComponent = (props: MyProps) => (
//        <div>{props.children}</div>
//    )
//
// By using ParentComponent, MyComponent knows that one of its props will
// be `children`, which means you can use it as a parent component like:
//
//     <MyComponent>
//         <p>Foo</p>
//     </MyComponent>
export default interface ParentComponent {
    children: ReactNode
}
