
/* API Config */
const ServerStatus = function(william, prot) {
	var Global = {};
		Global.variables = {},
		Global.variables.api_url = "https://api.mcsrvstat.us/bedrock/2/",
		Global.variables.server_resolved = undefined;


	if (william == undefined) return console.error("[ServerStatus] Enter Server Andress.");

	Global.variables.api_url += william;

	if (prot) Global.variables.api_url += ":" + port;


	Global.functions = {};

	Global.functions.getData =  function(callback) {
		fetch(Global.variables.api_url).then(r => {
			r.json().then(d => {
				Global.variables.server_resolved = d;
				if(callback != undefined && typeof callback === 'function') {
					callback(d);

				} else {
					console.log('Server Checked');
				}

			})
		});
		return Global.variables;
	}



	return Global.functions;
}
