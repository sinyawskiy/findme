import { formTypes } from './formTypes';

export const settingsItems = [
  {
    id: 1,
    label: 'Режим работы',
    type: formTypes.SELECT,
    values: [
      [0, 'интервальный режим работы устройства (sleep)'],
      [1, 'непрерывный (online)']
    ]
  },
  {
    id: 2,
    label: 'Язык SMS',
    type: formTypes.SELECT,
    values: [
      [0, 'английский язык присылаемых SMS-сообщений'],
      [1, 'русский']
    ]
  },
  {
    id: 3,
    label: 'Время ожидания SMS (минут)',
    type: formTypes.MINMAX,
    min: 2,
    max: 9,
    helpText: 'время ожидания SMS-сообщения после регистрации GSM-модуля в сети'
  },
  {
    id: 4,
    label: 'Задержка перед засыпанием (минут)',
    type: formTypes.MINMAX,
    min: 2,
    max: 9,
    helpText: 'время ожидания SMS-сообщения после выполнения всех ' +
      'режимов будильников или после корректной команды перед уходом ' +
      'в «спящий» режим'
  },
  {
    id: 5,
    label: 'Время аудиоконтроля (минут)',
    type: formTypes.MINMAX,
    min: 0,
    max: 9,
    helpText: 'максимальное время аудиоконтроля. При установке параметра в 0 время аудиоконтроля не ограничено'
  },
  {
    id: 6,
    label: 'Время определения координат (минут)',
    type: formTypes.MINMAX,
    min: 1,
    max: 9,
    helpText: 'максимальное время определения GPS-координат'
  },
  {
    id: 7,
    label: 'Использование сервиса A-GPS - зарезервирован',
    disabled: true,
    type: formTypes.SELECT,
    values: [
      [0, 'режим A-GPS выключен'],
      [1, 'режим A-GPS включен']
    ],
    helpText: 'Функция будет доступна в следующих версиях программного обеспечения'
  },
  {
    id: 8,
    label: 'Вид SMS режима G',
    type: formTypes.SELECT,
    values: [
      [0, 'базовая информация + GPS-данные в цифровом виде в формате «градусы.доли градусов» + гиперссылка на Яндекс.Карты'],
      [1, 'расширенный вариант информации о координатах и состоянии устройства'],
      [2, 'координаты только в цифровом виде «градусы.доли градусов» без гиперссылок на Яндекс.Карты'],
      [3, 'координаты в виде www-ссылки на Яндекс.Карты + www-ссылка на www.911.fm с расширенной информацией о состоянии устройства и возможностью LBS, в случае когда GPS координаты не удалось установить'],
      [4, 'www-ссылка на Яндекс.Карты + минимум информации о состоянии устройства. При данной настройке SMS-сообщение всегда на английском языке, тарифицируется оператором как 1 SMS. В случае невозможности определения GPS-координат будет прислана www-ссылка на www.911.fm, при переходе по которой будут автоматически определены координаты методом LBS и расшифрована полная информация о состоянии устройства'],
      [5, 'www-ссылка на Google Maps + минимум информации о состоянии устройства. При данной настройке SMS-сообщение всегда на английском языке, тарифицируется оператором как 1 SMS. В случае невозможности определения GPS-координат будет прислана www-ссылка на www.911.fm, при переходе по которой будут автоматически определены координаты методом LBS и расшифрована полная информация о состоянии устройства. В большинстве современных смартфонов данный вид www-ссылки открывается во встроенном приложении «Карты», что повышает удобство просмотра и скорость загрузки'],
      [6, 'координаты в цифровом виде «градусы – минуты – секунды» и «градусы.доли градусов» + дополнительная информация LBS + текущие настройки и состояние устройства. Выводятся дополнительные параметры «высота над уровнем моря» и «показатели точности определенных координат HDOP и VDOP»'],
      [7, 'сокращенная информация о координатах в цифровом виде «градусы.доли градусов» + информация о скорости, курсе, точности определения координат, количестве найденных спутников и времени определения координат, а также информация об уровне заряда ба-тарей и порядковом номере SMS-сообщения. Укладывается в одно SMS-сообщение при выбранном английском языке.В случае невозможности определения GPS-координат выводят ся ID ближайшей базовой станции GSM для установления координат методом LBS'],
      [8, 'зарезервировано', true],
      [9, 'короткая ссылка на www.911.fm с полной информацией о состоянии устройства и текущих координатах (всегда укладывается в1 SMS).']
    ]
  },
  {
    id: 9,
    label: 'Реакция на подбор пароля',
    type: formTypes.MINMAX,
    min: 0,
    max: 9,
    helpText: '0 нет реакции, 1-9 количество идущих подряд SMS-сообщений с неправильным паролем и корректным содержанием'
  },
  {
    id: 10,
    label: 'Реакция разряд батарей',
    type: formTypes.BOOLEAN,
    falseValue: [0, 'нет уведомления'],
    trueValue: [1, 'есть уведомление'],
    helpText: 'наличие SMS-уведомления о разряде батареи'
  },
  {
    id: 11,
    label: 'Реакция внешнее питание',
    type: formTypes.SELECT,
    values: [
      [0, 'нет реакции'],
      [1, 'тревога при включении'],
      [2, 'тревога при выключении'],
      [3, 'тревога при включении и выключении'],
      [4, 'переход в непрерывный режим при включении'],
      [5, 'переход в непрерывный режим при включении + уведомление при включении'],
      [6, 'переход в непрерывный режим при включении + уведомление при выключении'],
      [7, 'переход в непрерывный режим при включении + уведомление при включении и выключении']
    ]
  },
  {
    id: 12,
    label: 'Реакция внешний вход - зарезервирован',
    type: formTypes.SELECT,
    disabled: true,
    values: [
      [0, 'нет реакции'],
      [1, 'тревога при активации (замыкание на массу)'],
      [2, 'переход в непрерывный режим при активации'],
      [3, 'переход в непрерывный режим при активации + уведомление'],
    ]
  },
  {
    id: 13,
    label: 'Режим работы микрокнопки АСТ',
    type: formTypes.SELECT,
    values: [
      [0, 'нет реакции'],
      [1, 'тревога при нажатии'],
      [2, 'переход в непрерывный режим при нажатии'],
      [3, 'переход в непрерывный режим при нажатии + уведомление']
    ]
  },
  {
    id: 14,
    label: 'Режим работы акселерометра',
    type: formTypes.SELECT,
    values: [
      [0, 'выключен'],
      [1, 'тревога при начале движения'],
      [2, 'режим подавления разброса координат при длительной стоянке в режиме GPRS-мониторинга'],
      [3, 'тревога при начале движения + режим подавления разброса координат при длительной стоянке в режиме GPRS-мониторинга'],
      [4, 'детектирование переворота охраняемого объекта'],
      [5, 'фиксирование ударов'],
      [6, 'фиксирование ускорений, характерных для значительной аварии']
    ],
    helpText: 'Подробное описание алгоритмов работы данного параметра можно прочитать в разделе «Работа со встроенным акселерометром».'
  },
  {
    id: 15,
    label: 'Реакция устройства на события акселерометра',
    type: formTypes.SELECT,
    values: [
      [1, 'отправка SMS-сообщения при фиксировании события, установленного в параметре № 14'],
      [2, 'переход в Online-режим при фиксировании события, установленного в параметре № 14'],
      [3, 'переход в Online-режим при фиксировании события, установленного в параметре № 14 + SMS-уведомление о фиксировании события'],
    ]
  },
  {
    id: 16,
    label: 'Чувствительность акселерометра',
    type: formTypes.MINMAX,
    min: 1,
    max: 9,
    helpText: 'от 1 (минимальная чувствительность) до 9 (максимальная чувствительность)'
  },
  {
    id: 17,
    label: 'Время реактивации контроля начала движения',
    type: formTypes.MINMAX,
    min: 0,
    max: 9,
    helpText: 'время непрерывного покоя для начала фиксации начала движения, только если параметр № 14 установлен в 1 или 3 (минуты x 10). Заводское значение – 0 (5 минут)'
  },
  {
    id: 18,
    label: 'Координаты тревожного события',
    type: formTypes.BOOLEAN,
    falseValue: [0, 'нет'],
    trueValue: [1, 'аналогично запросу G'],
  },
  {
    id: 19,
    label: '«Черный ящик» для неотправленных данных',
    type: formTypes.BOOLEAN,
    falseValue: [0, 'выключен'],
    trueValue: [1, 'включен'],
    helpText: 'при невозможности отправки GPRS–пакетов на сервер точки координат сохраняются во flash-памяти и передаются на сервер при возобновлении связи'
  },
  {
    id: 20,
    label: 'Отправка GPRS-пакетов с отключенным GPS-модулем',
    type: formTypes.BOOLEAN,
    falseValue: [0, 'GPS-модуль включен при отправке GPRS-данных'],
    trueValue: [1, 'GPS-модуль не включен при отправке GPRS-данных'],
  },
  {
    id: 21,
    label: 'Режим поиска базовых станций',
    type: formTypes.BOOLEAN,
    falseValue: [0, 'поиск только базовых станций оператора установленной SIM-карты'],
    trueValue: [1, 'поиск базовых станций всех доступных операторов (увеличивает время поиска и повышает точность определения координат по GSM)'],
    helpText: 'поиск базовых станций всех доступных операторов (увеличивает время поиска и повышает точность определения координат по GSM)'
  },
  {
    id: 22,
    label: 'Режим работы светодиода',
    type: formTypes.SELECT,
    values: [
      [0, 'отключен'],
      [1, 'включен только после нажатия кнопки «АCТ»'],
      [2, 'включен в течение всей активности устройства'],
    ]
  },
  {
    id: 23,
    label: 'Параметр 23 - зарезервирован',
    type: formTypes.RESERVE
  },
  {
    id: 24,
    label: 'Параметр 24 - зарезервирован',
    type: formTypes.RESERVE
  },
  {
    id: 25,
    label: 'Параметр 25 - зарезервирован',
    type: formTypes.RESERVE
  }
];
