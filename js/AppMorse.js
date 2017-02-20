	angular.module("AppMorse",[]);
	angular.module("AppMorse").controller("AppMorseCtrl", function($scope, $window, $timeout){
		$scope.titulo = "Pugs Translator Code Morse";

			//@var $scope.cod = recebe o valor de ponto e linha;
			//@var $scope.codigoMorse = string com os valores de ponto e linha;
			//@var audioLinha = Recebe a instacio do obj Audio();
			//@var audioPonto = Recebe a instancia do obj Audio();
			$scope.cod = [];
			$scope.codigoMorse = '';
			$scope.audioLinha;
			$scope.audioPonto;
			$scope.i = 0;
			$scope.arrayCodigo = [];
			
			$scope.translator = function(evento){
				var codigo = evento.keyCode;
				//console.log(codigo);
				
				switch(codigo){
					case 65:
						//$scope.cod.push({test: '.-'})
						$scope.cod.push('.-');//a
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];						
					break;
					case 66:
						//$scope.cod.push({test: '-...'})
						$scope.cod.push('-...');//b
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 67:
						$scope.cod.push('-.-.');//c
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 68:
						$scope.cod.push('-..');//d
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 69:
						$scope.cod.push('.');//e
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 70:
						$scope.cod.push('..-.');//f
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 71:
						$scope.cod.push('--.');//g
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 72:
						$scope.cod.push('....');//h
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 73:
						$scope.cod.push('..');//i
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 74:
						$scope.cod.push('.---');//j
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 75:
						$scope.cod.push('-.-');//k
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 76:
						$scope.cod.push('.-..');//l
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 77:
						$scope.cod.push('--');//m
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1]
					break;
					case 78:
						$scope.cod.push('-.');//n
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 79:
						$scope.cod.push('---');//o
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 80:
						$scope.cod.push('.--.');//p
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 81:
						$scope.cod.push('--.-');//q
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 82:
						$scope.cod.push('.-.');//r
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 83:
						$scope.cod.push('...');//s
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 84:
						$scope.cod.push('-');//t
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 85:
						$scope.cod.push('..-');//u
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 86:
						$scope.cod.push('...-');//v
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 87:
						$scope.cod.push('.--');//w
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 88:
						$scope.cod.push('-..-');//x
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 89:
						$scope.cod.push('-.--');//y
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 90:
						$scope.cod.push('--..');//z
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;

					//Alfa numericos:
					case 48:
						$scope.cod.push('-----');//0
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 49:
						$scope.cod.push('.----');//1
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 50:
						$scope.cod.push('..---');//2
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 51:
						$scope.cod.push('...--');//3
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 52:
						$scope.cod.push('....-');//4
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 53:
						$scope.cod.push('.....');//5
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 54:
						$scope.cod.push('-....');//6
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 55:
						$scope.cod.push('--...');//7
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 56:
						$scope.cod.push('---..');//8
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
					case 57:
						$scope.cod.push('----.')//9;
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;

					//BACKSpace
					case 8:
						var aux = $scope.cod.pop();
						aux = aux.length;
						$scope.codigoMorse = $scope.codigoMorse.substr(0,($scope.codigoMorse.length-aux));	
					break;

					//space
					case 32:
						$scope.cod.push(' ')//Espaço;
						$scope.codigoMorse = $scope.codigoMorse + $scope.cod[$scope.cod.length-1];
					break;
				};				
			};
			var audio = function (){
				$scope.audioLinha = new Audio();
				$scope.audioLinha.src = "soung/linha.ogg";

				$scope.audioPonto = new Audio();
				$scope.audioPonto.src = "soung/ponto.ogg";
			};

			$scope.loadSoung = function (){
				$window.addEventListener("load", audio);
			};

			$scope.stringArray = function(codigo) {
				$scope.arrayCodigo = codigo.split("");
				$scope.i = 0;
				$scope.playSoung();
			};

			$scope.playSoung = function (){
				var segundos = 500;
				
				$timeout(function(){
				console.log($scope.arrayCodigo);	
					if ($scope.i <= $scope.arrayCodigo.length) {
						if ($scope.arrayCodigo[$scope.i] == "-") {
							$scope.audioLinha.play();
							console.log("Linha");
						};
						if ($scope.arrayCodigo[$scope.i] == ".") {
							$scope.audioPonto.play();
							console.log("Ponto");
						};
						$scope.i++;
						$scope.playSoung();
					};
				}, segundos);
			};

			$scope.i = 0;
			//stop Soung
			$scope.stopSoung = function(){
				$scope.i = $scope.arrayCodigo.length;
			};
	});