import React, {Component} from 'react'

import Head from 'next/head'

const environment = 'development';
const config = require("../knexfile.js")[environment];
const knex = require("knex")(config);


const imagesLoadedOptions = {
  background: '.my-bg-image-el'
}

class Test extends Component {

  constructor(props) {
    super(props)
    var t =''
    for (var i = 0; i < 10; i++) {
    	t += String.fromCharCode(parseInt(Math.random() * i))
    }
    console.log(t)
    knex('test_table').insert({ title: t })
    this.state = {
      title: []
    }
  }

  loadData = () => {
  	knex('test_table').limit(3).then((data) => {
  		ts = []
		for (var i = 0; i < data.length; i++) {
			ts.append(data[i].title)
		}
    	console.log(ts)
		this.setState({title:ts})
	})
  }


  render() {
    const {title} = this.props
    return (
    	<div>{title}
			<div>TEST</div>
    	</div>
    	)
  }
}

export default Test
