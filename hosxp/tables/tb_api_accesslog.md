# `tb_api_accesslog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| AccessLogID | varchar(20) | NO | PRI |  |  |  |
| AccessLogDatetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| CompanyId | varchar(20) | NO | PRI |  |  |  |
| CompanyModul | varchar(50) | NO | PRI |  |  |  |
| UserIdApi | varchar(20) | YES |  | NULL |  |  |
| UserId | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| vn | varchar(15) | YES |  | NULL |  |  |
| an | varchar(10) | YES |  | NULL |  |  |
| AccessLogStatus | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | AccessLogID | yes | 1 |
| PRIMARY | AccessLogDatetime | yes | 2 |
| PRIMARY | CompanyId | yes | 3 |
| PRIMARY | CompanyModul | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "AccessLogID": "20200219143136vty5d",
    "AccessLogDatetime": "2020-02-18 14:31:10",
    "CompanyId": "XEZOvoBSjsBOPcp",
    "CompanyModul": "/UserAuthenNew",
    "UserIdApi": "bms",
    "UserId": "",
    "hn": "",
    "vn": "",
    "an": "",
    "AccessLogStatus": "D"
  },
  {
    "AccessLogID": "20200219143157ppppD",
    "AccessLogDatetime": "2020-02-18 14:31:31",
    "CompanyId": "XEZOvoBSjsBOPcp",
    "CompanyModul": "/UserAuthenNew",
    "UserIdApi": "bms",
    "UserId": "",
    "hn": "",
    "vn": "",
    "an": "",
    "AccessLogStatus": "D"
  },
  {
    "AccessLogID": "20200219143213JqX95",
    "AccessLogDatetime": "2020-02-18 14:31:46",
    "CompanyId": "XEZOvoBSjsBOPcp",
    "CompanyModul": "/UserAuthenNew",
    "UserIdApi": "bms",
    "UserId": "",
    "hn": "",
    "vn": "",
    "an": "",
    "AccessLogStatus": "D"
  },
  {
    "AccessLogID": "20200219143332C8GZ1",
    "AccessLogDatetime": "2020-02-18 14:33:06",
    "CompanyId": "XEZOvoBSjsBOPcp",
    "CompanyModul": "/UserAuthenNew",
    "UserIdApi": "bms",
    "UserId": "",
    "hn": "",
    "vn": "",
    "an": "",
    "AccessLogStatus": "D"
  },
  {
    "AccessLogID": "20200219143349PJiD6",
    "AccessLogDatetime": "2020-02-18 14:33:23",
    "CompanyId": "XEZOvoBSjsBOPcp",
    "CompanyModul": "/UserAuthenNew",
    "UserIdApi": "bms",
    "UserId": "",
    "hn": "",
    "vn": "",
    "an": "",
    "AccessLogStatus": "D"
  },
  {
    "AccessLogID": "20200219143358kSZyE",
    "AccessLogDatetime": "2020-02-18 14:33:32",
    "CompanyId": "XIRefAdSzMhGn",
    "CompanyModul": "/UserAuthenNew",
    "UserIdApi": "",
    "UserId": "",
    "hn": "",
    "vn": "",
    "an": "",
    "AccessLogStatus": "Y"
  },
  {
    "AccessLogID": "20200219143408XV62s",
    "AccessLogDatetime": "2020-02-18 14:33:41",
    "CompanyId": "XIRefAdSzMhGn",
    "CompanyModul": "/UserAuthenNew",
    "UserIdApi": "bms",
    "UserId": "",
    "hn": "",
    "vn": "",
    "an": "",
    "AccessLogStatus": "Y"
  },
  {
    "AccessLogID": "20200219143419lwJ4l",
    "AccessLogDatetime": "2020-02-18 14:33:52",
    "CompanyId": "XIRefAdSzMhGn",
    "CompanyModul": "/UserAuthenNew",
    "UserIdApi": "bms",
    "UserId": "",
    "hn": "",
    "vn": "",
    "an": "",
    "AccessLogStatus": "Y"
  }
]
```
