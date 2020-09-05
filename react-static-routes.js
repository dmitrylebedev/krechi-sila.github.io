
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import src_routes_Home_Home from '../src/routes/Home/Home'
import src_routes_Geo_Geo from '../src/routes/Geo/Geo'
import src_routes_Photos_Photos from '../src/routes/Photos/Photos'
import src_routes_Memories_Memories from '../src/routes/Memories/Memories'
import src_routes_Bus_Bus from '../src/routes/Bus/Bus'
import src_routes_NotFound from '../src/routes/NotFound'
    const templateMap = {
    t_0: src_routes_Home_Home,
t_1: src_routes_Geo_Geo,
t_2: src_routes_Photos_Photos,
t_3: src_routes_Memories_Memories,
t_4: src_routes_Bus_Bus,
t_5: src_routes_NotFound
  }
    const templateTree = {c:{"404":{t:"t_5"},"/":{t:"t_0"},"geo":{t:"t_1"},"photos":{t:"t_2"},"memories":{t:"t_3"},"timetables":{c:{"bus":{t:"t_4"}}}}}
    
    const getTemplateForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }
  

    export default class Routes extends Component {
      render () {
        return (
            
    <Route path='*' render={props => {
      let Template = getTemplateForPath(props.location.pathname)
      if (!Template) {
        Template = getTemplateForPath('404')
      }
      return Template && <Template {...props} />
    }} />
  
        )
      }
    }
  