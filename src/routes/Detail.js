import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
        history.push("/");
        }
    }
    
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}
// movie-detail을 클릭하면 Detail 페이지로 정상적으로 이동하지만,
// 수동적으로 url에 /movie-detail을 입력하게 되면 state props가 전달되지 않아 undefined가 된다.
// state가 없는 상태를 핸들링하기 위해 class component로 변경
// -> user를 데려와서 Home으로 redirect 시키자.

export default Detail;