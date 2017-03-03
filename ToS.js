var ranked = "";
$(window).on('load', function() {
    ranked = new Ranked("#mainTable >tbody");
    ranked.setTable();

});

function numberChange(key,value){
    ranked.category[key].number = value;
    ranked.setTable();
}

function roleChange(key,value) {
    ranked.category[key].role = value;
    ranked.setTable();
}

function Ranked(element) {
    this.element = element;
    this.category = [
        {
            "name" : "Jailor",
            "role" : "Jailor",
            "number" : 0,
            "color" : "green",
            "list" : ['Jailor']
        },
        {
            "name": "Town Investigate",
            "role" : "",
            "number" : 0,
            "color" : "green",
            "list" : [
                "Investigator",
                "Lookout",
                "Sheriff",
                "Spy"
            ]
        },
        {
            "name" :"Town Investigate",
            "role" : "",
            "number" : 0,
            "color" : "green",
            "list" : [
                "Investigator",
                "Lookout",
                "Sheriff",
                "Spy"
            ]
        },
        {
            "name" : "Town Support",
            "role" : "",
            "number" : 0,
            "color" : "green",
            "list" : [
                "Escort",
                "Medium",
                "Retributionist",
                "Mayor",
                "Transporter"
            ]
        },
        {
            "name" : "Town Support",
            "role" : "",
            "number" : 0,
            "color" : "green",
            "list" : [
                "Escort",
                "Medium",
                "Retributionist",
                "Mayor",
                "Transporter"
            ]
        },
        {
            "name" : "Town Protective",
            "role" : "",
            "number" : 0,
            "color" : "green",
            "list" : [
                "Body Guard",
                "Doctor"
            ]
        },
        {
            "name" : "Town Killing",
            "role" : "",
            "number" : 0,
            "color" : "green",
            "list" : [
                "Vampire Hunter",
                "Veteran",
                "Vigilante"
            ]
        },
        {
            "name" : "Random Town",
            "role" : "",
            "number" : 0,
            "color" : "green",
            "list" : [
                "Investigator",
                "Lookout",
                "Sheriff",
                "Spy",
                "Escort",
                "Medium",
                "Retributionist",
                "Mayor",
                "Transporter",
                "Body Guard",
                "Doctor",
                "Vampire Hunter",
                "Veteran",
                "Vigilante"

            ]
        },
        {
            "name" : "God Father",
            "role" : "God Father",
            "number" : 0,
            "color" : "red",
            "list" : ["God Father"]
        },
        {
            "name" : "Mafioso",
            "role" : "Mafioso",
            "number" : 0,
            "color" : "red",
            "list" : ["Mafioso"]
        },
        {
            "name" : "Random Mafia",
            "role" : "",
            "number" : 0,
            "color" : "red",
            "list" : [
                "Disguiser",
                "Forger",
                "Framer",
                "Janitor",
                "Blackmailer",
                "Consigliere",
                "Consort"
            ]
        },
        {
            "name" : "Neutral Killing",
            "role" : "",
            "number" : 0,
            "color" : "gray",
            "list" : [
                "Arsonist",
                "Werewolf",
                "Serial Killer"
            ]
        },
        {
            "name" : "Neutral Evil",
            "role" : "",
            "number" : 0,
            "color" : "gray",
            "list" : [
                "Executioner",
                "Jester",
                "Witch"
            ]
        },
        {
            "name" : "Neutral Benign",
            "role" : "",
            "number" : 0,
            "color" : "gray",
            "list" : [
                "Amnesiac",
                "Survivor"
            ]
        },
        {
            "name" : "Any",
            "role" : "",
            "number" : 0,
            "color" : "black",
            "list" : [
                "Investigator",
                "Lookout",
                "Sheriff",
                "Spy",
                "Escort",
                "Medium",
                "Retributionist",
                "Mayor",
                "Transporter",
                "Body Guard",
                "Doctor",
                "Vampire Hunter",
                "Veteran",
                "Vigilante",
                "Disguiser",
                "Forger",
                "Framer",
                "Janitor",
                "Blackmailer",
                "Consigliere",
                "Consort",
                "Arsonist",
                "Werewolf",
                "Serial Killer",
                "Executioner",
                "Jester",
                "Witch",
                "Amnesiac",
                "Survivor",
                "Vampire"
            ]
        }
    ];

    this.generateCombo = function(array,choose = '') {
        var select = '<option value="">---</option>';
        for(var i = 0 ; i < array.length ; i++)
        {
            var selected = "";
            if(array[i] == choose){
                selected = "selected";
            }
            select += "<option "+selected+" value='"+array[i]+"'>"+array[i]+"</option>";
        }
        return select;
    };

    this.setTable = function() {
        var html = '';
        for( var i = 0; i < this.category.length ; i++ ){
            html += "<tr style='color:white;background-color:"+this.category[i].color+"'>";
            html += '<td><input type="number" onchange="numberChange('+i+',this.value)" value="'+this.category[i].number+'" class="number"></td>';
            html += '<td>'+this.category[i].name+'</td>';

            html += '<td>';
            html += '<select class="select" onchange="roleChange('+i+',this.value)">';
            html += this.generateCombo(this.category[i].list,this.category[i].role);
            html += '</td>';

            html += "</tr>";
        };
        $(this.element).empty();
        $(this.element).append(html);
        this.clearList();
        this.setList();
    }

    this.setList = function() {
        for( var i = 0 ; i < this.category.length ; i++ ){
            $('.'+this.category[i].number).text(this.category[i].number+". "+this.category[i].role);
            $('.'+this.category[i].number).css('color',this.category[i].color);
        }
    }

    this.clearList = function() {
        var limit = 15;

        for( var i = 1 ; i <= limit ; i++ ){
            $('.'+i).text(i+".");
        }
    }
}


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
    var expression  = '';
    var tmp_field   = checkfield.split(',');
    var tmp_val     = checkval.split(',');
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
    var expression  = '';
    var tmp_field   = checkfield.split(',');
    var tmp_val     = checkval.split(',');
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
