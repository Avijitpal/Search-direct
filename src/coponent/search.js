import React from 'react'
class Search extends React.Component{
    state={title:""}
    onsearchChange=event=>{
       const _title = event.target.value;
       this.setState({title:_title});
     //  console.log(_title);
      
    };
    handleSubmit=event=>{
        event.preventDefault();
        this.props.onSearch(this.state.title)
    };
    render(){
        return(
        <div className="form-controls">
            <form onSubmit={this.handleSubmit}>
                <label>Search</label>
                <input type="text"
                value = {this.state.title}
                 onChange={this.onsearchChange}
                />
            </form>
        </div>
        )
    }
}
export default Search;