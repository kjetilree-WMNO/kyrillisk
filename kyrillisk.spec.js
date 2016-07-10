var path = require('path');
var kyrillisk = require( path.resolve( __dirname, "./kyrillisk.js" ) );

describe('All Språkrådet Russian Examples: ', function() {
	
  it('Transcribes Aлeксeй to Aleksej', function() {
	expect(kyrillisk.transcribeFromRussian('Алексей')).toBe('Aleksej');
  });
  
  it('Transcribes Байкал to Bajkal', function() {
	expect(kyrillisk.transcribeFromRussian('Байкал')).toBe('Bajkal');
  });
  
  it('Transcribes Василий to Vasilij', function() {
	expect(kyrillisk.transcribeFromRussian('Василий')).toBe('Vasilij');
  });  
  
  it('Transcribes Грозный to Groznyj', function() {
	expect(kyrillisk.transcribeFromRussian('Грозный')).toBe('Groznyj');
  });
  
  it('Transcribes Дагестан to Dagestan', function() {
	expect(kyrillisk.transcribeFromRussian('Дагестан')).toBe('Dagestan');
  });
  
  it('Transcribes Елена to Jelena', function() {
	expect(kyrillisk.transcribeFromRussian('Елена')).toBe('Jelena');
  });
  
  it('Transcribes Николаев to Nikolajev', function() {
	expect(kyrillisk.transcribeFromRussian('Николаев')).toBe('Nikolajev');
  });  
  
  it('Transcribes Тургенев to Turgenev', function() {
	expect(kyrillisk.transcribeFromRussian('Тургенев')).toBe('Turgenev');
  });  
  
  it('Transcribes Ильичёв to Iljitsjov', function() {
	expect(kyrillisk.transcribeFromRussian('Ильичёв')).toBe('Iljitsjov');
  });  
  
  it('Transcribes Чернышёв to Tsjernysjov', function() {
	expect(kyrillisk.transcribeFromRussian('Чернышёв')).toBe('Tsjernysjov');
  });  
 
  it('Transcribes Гoрбaчёв to Gorbatsjov', function() {
	expect(kyrillisk.transcribeFromRussian('Горбачёв')).toBe('Gorbatsjov');
  });  
  
  it('Transcribes Cёмушкин to Siomusjkin', function() {
	expect(kyrillisk.transcribeFromRussian('Сёмушкин')).toBe('Siomusjkin');
  });    
 
  it('Transcribes Зёгaнoв to Zioganov', function() {
	expect(kyrillisk.transcribeFromRussian('Зёганов')).toBe('Zioganov');
  });  

  it('Transcribes Алёша to Aljosja', function() {
	expect(kyrillisk.transcribeFromRussian('Алёша')).toBe('Aljosja');
  }); 
  
  it('Transcribes Жуков to Zjukov', function() {
	expect(kyrillisk.transcribeFromRussian('Жуков')).toBe('Zjukov');
  }); 

  it('Transcribes Воронеж to Voronezj', function() {
	expect(kyrillisk.transcribeFromRussian('Воронеж')).toBe('Voronezj');
  });   
  
  it('Transcribes Зорин to Zorin', function() {
	expect(kyrillisk.transcribeFromRussian('Зорин')).toBe('Zorin');
  });   

  it('Transcribes Казань to Kazan', function() {
	expect(kyrillisk.transcribeFromRussian('Казань')).toBe('Kazan');
  });     
  
  it('Transcribes Нилин to Nilin,', function() {
	expect(kyrillisk.transcribeFromRussian('Нилин')).toBe('Nilin');
  });   
  
  it('Transcribes Ильич to Iljitsj', function() {
	expect(kyrillisk.transcribeFromRussian('Ильич')).toBe('Iljitsj');
  });

  it('Transcribes Йошкар-Ола to Josjkar-Ola', function() {
	expect(kyrillisk.transcribeFromRussian('Йошкар-Ола')).toBe('Josjkar-Ola');
  });

  it('Transcribes Толстой to Tolstoj', function() {
	expect(kyrillisk.transcribeFromRussian('Толстой')).toBe('Tolstoj');
  });  
  
  it('Transcribes Киров to Kirov', function() {
	expect(kyrillisk.transcribeFromRussian('Киров')).toBe('Kirov');
  });  

  it('Transcribes Громыко to Gromyko', function() {
	expect(kyrillisk.transcribeFromRussian('Громыко')).toBe('Gromyko');
  });

  it('Transcribes Ленин to Lenin', function() {
	expect(kyrillisk.transcribeFromRussian('Ленин')).toBe('Lenin');
  });  
  
  it('Transcribes Даль to Dal', function() {
	expect(kyrillisk.transcribeFromRussian('Даль')).toBe('Dal');
  });
  
  it('Transcribes Максим to Maksim', function() {
	expect(kyrillisk.transcribeFromRussian('Максим')).toBe('Maksim');
  });

  it('Transcribes Никитин to Nikitin', function() {
	expect(kyrillisk.transcribeFromRussian('Никитин')).toBe('Nikitin');
  });  
  
  it('Transcribes Ожегов to Ozjegov', function() {
	expect(kyrillisk.transcribeFromRussian('Ожегов')).toBe('Ozjegov');
  }); 

  it('Transcribes Гоголь to Gogol', function() {
	expect(kyrillisk.transcribeFromRussian('Гоголь')).toBe('Gogol');
  });   
  
  it('Transcribes Плахин to Plakhin', function() {
	expect(kyrillisk.transcribeFromRussian('Плахин')).toBe('Plakhin');
  }); 

  it('Transcribes Майкоп to Majkop', function() {
	expect(kyrillisk.transcribeFromRussian('Майкоп')).toBe('Majkop');
  });   
  
  it('Transcribes Рожков to Rozjkov', function() {
	expect(kyrillisk.transcribeFromRussian('Рожков')).toBe('Rozjkov');
  });  

  it('Transcribes Горький to Gorkij', function() {
	expect(kyrillisk.transcribeFromRussian('Горький')).toBe('Gorkij');
  });    
  
  it('Transcribes Сталин to Stalin', function() {
	expect(kyrillisk.transcribeFromRussian('Сталин')).toBe('Stalin');
  });   

  it('Transcribes Ломоносов to Lomonosov', function() {
	expect(kyrillisk.transcribeFromRussian('Ломоносов')).toBe('Lomonosov');
  });     
  
  it('Transcribes Тамара to Tamara', function() {
	expect(kyrillisk.transcribeFromRussian('Тамара')).toBe('Tamara');
  });

  it('Transcribes Капитонов to Kapitonov', function() {
	expect(kyrillisk.transcribeFromRussian('Капитонов')).toBe('Kapitonov');
  });  

  it('Transcribes Уланова to Ulanova', function() {
	expect(kyrillisk.transcribeFromRussian('Уланова')).toBe('Ulanova');
  });  
  
  it('Transcribes Гусев to Gusev', function() {
	expect(kyrillisk.transcribeFromRussian('Гусев')).toBe('Gusev');
  });    
  
  it('Transcribes Федотов to Fedotov', function() {
	expect(kyrillisk.transcribeFromRussian('Федотов')).toBe('Fedotov');
  }); 

  it('Transcribes Панфёров to Panfjorov', function() {
	expect(kyrillisk.transcribeFromRussian('Панфёров')).toBe('Panfjorov');
  });   
  
  it('Transcribes Хрущёв to Khrusjtsjov', function() {
	expect(kyrillisk.transcribeFromRussian('Хрущёв')).toBe('Khrusjtsjov');
  });    
  
  it('Transcribes Тихонов to Tikhonov', function() {
	expect(kyrillisk.transcribeFromRussian('Тихонов')).toBe('Tikhonov');
  });  

  it('Transcribes Цыганов to Tsyganov', function() {
	expect(kyrillisk.transcribeFromRussian('Цыганов')).toBe('Tsyganov');
  });  
  
  it('Transcribes Ельцин to Jeltsin', function() {
	expect(kyrillisk.transcribeFromRussian('Ельцин')).toBe('Jeltsin');
  });    
  
  it('Transcribes Чехов to Tsjekhov', function() {
	expect(kyrillisk.transcribeFromRussian('Чехов')).toBe('Tsjekhov');
  });

  it('Transcribes Шостакович to Sjostakovitsj', function() {
	expect(kyrillisk.transcribeFromRussian('Шостакович')).toBe('Sjostakovitsj');
  });

  it('Transcribes Шагов to Sjagov,', function() {
	expect(kyrillisk.transcribeFromRussian('Шагов')).toBe('Sjagov');
  });
  
  it('Transcribes Гаршин to Garsjin', function() {
	expect(kyrillisk.transcribeFromRussian('Гаршин')).toBe('Garsjin');
  });  
  
  it('Transcribes Щербачёв to Sjtsjerbatsjov', function() {
	expect(kyrillisk.transcribeFromRussian('Щербачёв')).toBe('Sjtsjerbatsjov');
  });
  
  it('Transcribes Сыктывкар to Syktyvkar', function() {
	expect(kyrillisk.transcribeFromRussian('Сыктывкар')).toBe('Syktyvkar');
  });

  it('Transcribes Подгорный to Podgornyj', function() {
	expect(kyrillisk.transcribeFromRussian('Подгорный')).toBe('Podgornyj');
  });  
 
  it('Transcribes Эренбург to Erenburg', function() {
	expect(kyrillisk.transcribeFromRussian('Эренбург')).toBe('Erenburg');
  });  

  it('Transcribes Юдин to Judin', function() {
	expect(kyrillisk.transcribeFromRussian('Юдин')).toBe('Judin');
  });    
  
  it('Transcribes Любимов to Ljubimov', function() {
	expect(kyrillisk.transcribeFromRussian('Любимов')).toBe('Ljubimov');
  });   

  it('Transcribes Сюганов to Siuganov,', function() {
	expect(kyrillisk.transcribeFromRussian('Сюганов')).toBe('Siuganov');
  });   

  it('Transcribes Зюганов to Ziuganov', function() {
	expect(kyrillisk.transcribeFromRussian('Зюганов')).toBe('Ziuganov');
  });  

  it('Transcribes Яков to Jakov', function() {
	expect(kyrillisk.transcribeFromRussian('Яков')).toBe('Jakov');
  });  

  it('Transcribes Полянский to Poljanskij', function() {
	expect(kyrillisk.transcribeFromRussian('Полянский')).toBe('Poljanskij');
  });  

  it('Transcribes Сясь to Sias', function() {
	expect(kyrillisk.transcribeFromRussian('Сясь')).toBe('Sias');
  });  

  it('Transcribes Львов to Lvov', function() {
	expect(kyrillisk.transcribeFromRussian('Львов')).toBe('Lvov');
  });    

  it('Transcribes Рязань to Rjazan', function() {
	expect(kyrillisk.transcribeFromRussian('Рязань')).toBe('Rjazan');
  });    

  it('Transcribes Прокофьев to Prokofjev', function() {
	expect(kyrillisk.transcribeFromRussian('Прокофьев')).toBe('Prokofjev');
  });  
  
  it('Transcribes Афанасьев to Afanasiev', function() {
	expect(kyrillisk.transcribeFromRussian('Афанасьев')).toBe('Afanasiev');
  });  

});

describe('Russian Celebreties: ', function() {
	
  it('Transcribes Любовь егорова to Ljubov jegorova', function() {
	expect(kyrillisk.transcribeFromRussian('Любовь егорова')).toBe('Ljubov jegorova');
  });
  
  it('Transcribes Егорова to Jegorova', function() {
	expect(kyrillisk.transcribeFromRussian('Егорова')).toBe('Jegorova');
  });
  
  it('Transcribes Евгений Эдуардович Цыганов to Jevgenij Eduardovitsj Tsyganov', function() {
	expect(kyrillisk.transcribeFromRussian('Евгений Эдуардович Цыганов')).toBe('Jevgenij Eduardovitsj Tsyganov');
  });  
  
  it('Transcribes Георгий Васильевич Чичерин to Georgij Vasiljevitsj Tsjitsjerin', function() {
	expect(kyrillisk.transcribeFromRussian('Георгий Васильевич Чичерин')).toBe('Georgij Vasiljevitsj Tsjitsjerin');
  });  

  it('Transcribes Виталий Лазаревич Гинзбург to Vitalij Lazarevitsj Ginzburg', function() {
	expect(kyrillisk.transcribeFromRussian('Виталий Лазаревич Гинзбург')).toBe('Vitalij Lazarevitsj Ginzburg');
  }); 

  it('Transcribes Александр Исаевич Солженицын to Aleksandr Isajevitsj Solzjenitsyn', function() {
	expect(kyrillisk.transcribeFromRussian('Александр Исаевич Солженицын')).toBe('Aleksandr Isajevitsj Solzjenitsyn');
  });   

  it('Transcribes Валерий Ильич Рождественский to Valerij Iljitsj Rozjdestvenskij', function() {
	expect(kyrillisk.transcribeFromRussian('Валерий Ильич Рождественский')).toBe('Valerij Iljitsj Rozjdestvenskij');
  });   

  it('Transcribes Светлана Ганнушкина to Svetlana Gannusjkina', function() {
	expect(kyrillisk.transcribeFromRussian('Светлана Ганнушкина')).toBe('Svetlana Gannusjkina');
  }); 

  it('Transcribes Иван Павлов to Ivan Pavlov', function() {
	expect(kyrillisk.transcribeFromRussian('Иван Павлов')).toBe('Ivan Pavlov');
  });     

  it('Transcribes Дмитрий Анатольевич Медведев to Dmitrij Anatoljevitsj Medvedev', function() {
	expect(kyrillisk.transcribeFromRussian('Дмитрий Анатольевич Медведев')).toBe('Dmitrij Anatoljevitsj Medvedev');
  });    
 
  it('Transcribes Владимир Владимирович Путин to Vladimir Vladimirovitsj Putin', function() {
	expect(kyrillisk.transcribeFromRussian('Владимир Владимирович Путин')).toBe('Vladimir Vladimirovitsj Putin');
  });  
 
});

describe('Russian Cities: ', function() {
	
  it('Transcribes Ростов-на-Дону to Rostov-na-Donu', function() {
	expect(kyrillisk.transcribeFromRussian('Ростов-на-Дону')).toBe('Rostov-na-Donu');
  });  

  it('Transcribes Челябинск to Tsjeljabinsk', function() {
	expect(kyrillisk.transcribeFromRussian('Челябинск')).toBe('Tsjeljabinsk');
  });  

  it('Transcribes Красноярск to Krasnojarsk', function() {
	expect(kyrillisk.transcribeFromRussian('Красноярск')).toBe('Krasnojarsk');
  });  

  it('Transcribes Набережные Челны to Naberezjnyje Tsjelny', function() {
	expect(kyrillisk.transcribeFromRussian('Набережные Челны')).toBe('Naberezjnyje Tsjelny');
  }); 

  it('Transcribes Архангельск to Arkhangelsk', function() {
	expect(kyrillisk.transcribeFromRussian('Архангельск')).toBe('Arkhangelsk');
  }); 
  
  it('Transcribes Комсомольск-на-Амуре to Komsomolsk-na-Amure', function() {
	expect(kyrillisk.transcribeFromRussian('Комсомольск-на-Амуре')).toBe('Komsomolsk-na-Amure');
  }); 
  
  it('Transcribes Благовещенск to Blagovesjtsjensk ', function() {
	expect(kyrillisk.transcribeFromRussian('Благовещенск')).toBe('Blagovesjtsjensk');
  }); 

  it('Transcribes Петропавловск-Камчатский to Petropavlovsk-Kamtsjatskij ', function() {
	expect(kyrillisk.transcribeFromRussian('Петропавловск-Камчатский')).toBe('Petropavlovsk-Kamtsjatskij');
  }); 

  it('Transcribes Новочеркасск to Novotsjerkassk', function() {
	expect(kyrillisk.transcribeFromRussian('Новочеркасск')).toBe('Novotsjerkassk');
  }); 

  it('Transcribes Железнодорожный to Zjeleznodorozjnyj', function() {
	expect(kyrillisk.transcribeFromRussian('Железнодорожный')).toBe('Zjeleznodorozjnyj');
  });

  it('Transcribes Тольятти to Toljatti', function() {
	expect(kyrillisk.transcribeFromRussian('Тольятти')).toBe('Toljatti');
  });

  it('Transcribes Ульяновск to Uljanovsk', function() {
	expect(kyrillisk.transcribeFromRussian('Ульяновск')).toBe('Uljanovsk');
  });
  
});

describe('Strings with non-cyrillic characters: ', function() {
	
  it('Keeps periods', function() {
	expect(kyrillisk.transcribeFromRussian('.Улья.новск.')).toBe('.Ulja.novsk.');
  });
  
  it('Keeps exclamation marks', function() {
	expect(kyrillisk.transcribeFromRussian('!Ульяновск!!')).toBe('!Uljanovsk!!');
  });
  
  it('Transcribes uppercase Ё', function() {
	expect(kyrillisk.transcribeFromRussian('Ё')).toBe('Jo');
  });
  
  it('Transcribes lowercase ё', function() {
	expect(kyrillisk.transcribeFromRussian('ё')).toBe('jo');
  });
  
  it('Does not touch Latin characters', function() {
	expect(kyrillisk.transcribeFromRussian('Erna Solberg')).toBe('Erna Solberg');
  });
  
  it('Does not touch Japanese characters', function() {
	expect(kyrillisk.transcribeFromRussian('日本国')).toBe('日本国');
  });

  it('Keeps general typographic symbols', function() {
	expect(kyrillisk.transcribeFromRussian('&†№%‰¶§~©€£$')).toBe('&†№%‰¶§~©€£$');
  });
  
  it('Handles consecutive spaces', function() {
	expect(kyrillisk.transcribeFromRussian('Свет   ла  на')).toBe('Svet   la  na');
  });
  
  it('Discards consecutive j characters', function() {
	expect(kyrillisk.transcribeFromRussian('ья')).toBe('ja');
  });
  
});