import React from 'react';

export default ( { people=[] }  ) => 
<ul>{
people  ? people.map((person,i)=><li key={i}></li>):undefined
}
</ul>
