/*******************************************
Author: Mariana Azevedo
Since: 06/08/2016
*******************************************/
(function (){

  var app = angular.module('app', []);

  app.controller('PageCtrl', function ($scope, $window) {

		$scope.articlesPublished = [
			{'name': 'S.O.L.I.D principles: what are they and why projects should use them',
				'year': '2019',
				'language': 'English',
				'link': 'https://bit.ly/2OhRgEn'
			},
			{'name': 'Is there evaluation and quality assurance in your code during development and after the deploy?',
				'year': '2019',
				'language': 'English',
				'link': 'https://bit.ly/2JjyMEu'
			},
			{'name': 'Utilizando Travis CI como servidor de integração contínua em projetos open-source: um exemplo com a linguagem Java',
			'year': '2018',
			'language': 'Portuguese',
			'link': 'https://bit.ly/2QVowWw'
			},
			{'name': 'O que vi no DevFest BH 2018',
			'year': '2018',
			'language': 'Portuguese',
			'link': 'https://bit.ly/2ECBEqn'
			},
			{'name': 'Qualidade e JUnit: introduzindo automatização de testes unitários do seu software Java no dia-a-dia',
			'year': '2018',
			'language': 'Portuguese',
			'link': 'https://bit.ly/2Oosil4' 
			},
			{'name': 'Do you have time to talk about best coding practices with Java?',
			'year': '2018',
			'language': 'English',
			'link': 'https://bit.ly/2Rzp0xo' 
			},
			{'name': 'Princípios S.O.L.I.D: o que são e porque projetos devem utilizá-los',
			'year': '2018',
			'language': 'Portuguese',
			'link': 'https://bit.ly/2o97vY1' 
			},
			{'name': 'Existe avaliação e garantia de qualidade no seu código durante o desenvolvimento e depois do deploy?',
			'year': '2018',
			'language': 'Portuguese',
			'link': 'https://bit.ly/2BLwPgi' 
			},
			{'name': 'Tem um tempinho para conversarmos sobre boas práticas de programação com Java?',
			'year': '2018',
			'language': 'Portuguese',
			'link': 'https://bit.ly/2zsSWn8' 
			}
		];

  	$scope.papersPublished = [
			{'name': 'Characterization of the modularisation of open-source systems — A case study in domain of games',
			'year': '2016',
			'size': '1.8 MB',
			'link': 'http://ieeexplore.ieee.org/document/7836056/' 
			},
			{'name': 'Metrics and statistical techniques used to evaluate internal quality of object-oriented software: A systematic mapping',
			'year': '2016',
			'size': '229,3 KB',
			'link': 'http://ieeexplore.ieee.org/document/7836021/' 
			},
			{'name': 'Similar Characteristics in Internal Software Attributes for Object-Oriented Open-Source Software Projects',
			'year': '2014',
			'size': '1 MB',
			'link': 'http://migre.me/u986v'
			},
			{'name': 'Um Modelo Conceitual para Caracterização da Qualidade Interna de Sistemas de Software Open-Source Orientados a Objeto',
			'year': '2014',
			'size': '6.03 MB',
			'link': 'http://www.ic.ufal.br/evento/cbsoft2014/anais/wtdsoft_v1_p.pdf'
			},
			{'name': 'Improving the management of cost and scope in software projects using agile practices',
			'year': '2013',
			'size': '182 KB',
			'link': 'http://www.airccse.org/journal/jcsit/5113ijcsit04.pdf'
			},
			{'name': 'Agile practices to accelerate the delivery of software: a quantitative study with software professionals',
			'year': '2012',
			'size': '574 KB',
			'link': 'http://dx.doi.org/10.1109/HICSS.2013.75'
			},
			{'name': 'Agile Practices: An Assessment of Perception of Value of Professionals on the Quality Criteria in Performance of Projects',
			'year': '2011',
			'size': '323 KB',
			'link': 'http://dx.doi.org/10.4236/jsea.2011.412082'
			},
			{'name': 'Challenges of Teams Management: Using Agile Methods to Solve the Common Problems',
			'year': '2011',
			'size': '74 KB',
			'link': 'http://migre.me/u987R'
			},
			{'name': 'The impact of Scrum in software development: a case study using SWOT analysis',
			'year': '2010',
			'size': '153,20 KB',
			'link': 'http://www.dcc.ufla.br/infocomp/index.php/INFOCOMP/article/view/386/368'
			}
		];

	  $scope.init = function(){
	  	$scope.callback();
	  };
	      
	  $scope.callback = function(){
			$('.item-skills').each(function(){
				newWidth = $(this).parent().width() * $(this).data('percent');
				$(this).width(0);
			    $(this).animate({
			        width: newWidth,
			    }, 1000);
				});
				$('.icons-blue').each(function(){
					height = $(this).height();
			    $(this).animate({
			        height: 14,
			    }, 2000);
			});
		};

		var resize;
		window.onresize = function() {
			clearTimeout(resize);
			resize = setTimeout(function(){
				$scope.callback();
			}, 100);
		};

		$scope.goToLinkedIn = function(){
			document.location.assign("https://www.linkedin.com/in/mariana-de-azevedo-santos-1a126321");
		};

		$scope.goToGithub = function(){
			document.location.assign("https://github.com/mariazevedo88");
		};

		$scope.sendMail = function(){
    		$window.location.href = "mailto:mariana@bsi.ufla.br";
		};
		
		$scope.goToSourcerer = function(){
			$window.location.href = "https://sourcerer.io/mariazevedo88"
		}

    $scope.downloadPaper = function(link){
    		$window.location.href = link;
    };

  });
  
})();