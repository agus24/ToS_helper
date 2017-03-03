function findJSON(json,checkfield,checkval)
{
	for(var i = 0;i<json.length;i++)
	{
		if(json[i][checkfield] == checkval)
		{
			return true;
		}
	}
	return false;
}

function getIndexJSON(json,checkfield,checkval)
{
	for(var i = 0;i<json.length;i++)
	{
		if(json[i][checkfield] == checkval)
		{
			return i;
		}
	}
	return -1;
}

function findMultiJSON(json,checkfield,checkval)
{
	var expression 	= '';
	var tmp_field 	= checkfield.split(',');
	var tmp_val 	= checkval.split(',');
	for(var x = 0; x<tmp_field.length; x++)
	{
		if(x == 0){
			expression += "json[i]['" + tmp_field[x] + "'] == '" + tmp_val[x] + "'";
		}
		else{
			expression += " && json[i]['" + tmp_field[x] + "'] == '" + tmp_val[x] + "'";
		}
	}

	for(var i = 0;i<json.length;i++)
	{
		if(eval(expression))
		{
			return true;
		}
	}
	return false;
}

function getIndexMultiJSON(json,checkfield,checkval)
{
	var expression 	= '';
	var tmp_field 	= checkfield.split(',');
	var tmp_val 	= checkval.split(',');
	for(var x = 0; x<tmp_field.length; x++)
	{
		if(x == 0){
			expression += "json[i]['" + tmp_field[x] + "'] == '" + tmp_val[x] + "'";
		}
		else{
			expression += " && json[i]['" + tmp_field[x] + "'] == '" + tmp_val[x] + "'";
		}
	}

	for(var i = 0;i<json.length;i++)
	{
		if(eval(expression))
		{
			return i;
		}
	}
	return -1;
}
