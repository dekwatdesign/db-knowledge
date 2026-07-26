# `tb_api_userauthen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| UserIdApi | varchar(20) | NO | PRI |  |  |  |
| UserId | varchar(20) | NO | PRI |  |  |  |
| UserName | varchar(255) | YES |  | NULL |  |  |
| UserAuthenDatetime | datetime | YES |  | NULL |  |  |
| UserAuthenStatus | char(2) | YES | MUL | NULL |  |  |
| UserAuthenEver | char(2) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | UserIdApi | yes | 1 |
| PRIMARY | UserId | yes | 2 |
| UserAuthenEver | UserAuthenEver | no | 1 |
| UserAuthenStatus | UserAuthenStatus | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "UserIdApi": "MDNmNjE3YTlmMWViNWZj",
    "UserId": "chatchawal",
    "UserName": "[MASKED_FULLNAME]",
    "UserAuthenDatetime": "2020-09-01 11:25:19",
    "UserAuthenStatus": "Y",
    "UserAuthenEver": null
  },
  {
    "UserIdApi": "MGMxNGQ1MGRmODEzNTkx",
    "UserId": "chatchawal",
    "UserName": "[MASKED_FULLNAME]",
    "UserAuthenDatetime": "2020-05-26 11:57:15",
    "UserAuthenStatus": "Y",
    "UserAuthenEver": null
  },
  {
    "UserIdApi": "Mjc0MjdmZDI0OTMwODEw",
    "UserId": "yuwa231",
    "UserName": "[MASKED_FULLNAME]",
    "UserAuthenDatetime": "2020-08-05 11:41:22",
    "UserAuthenStatus": "Y",
    "UserAuthenEver": null
  },
  {
    "UserIdApi": "MTE5YThhNzMwNGIzZWIz",
    "UserId": "chatchawal",
    "UserName": "[MASKED_FULLNAME]",
    "UserAuthenDatetime": "2020-05-25 12:20:17",
    "UserAuthenStatus": "Y",
    "UserAuthenEver": null
  },
  {
    "UserIdApi": "MWZlYzBkMDI2ZDFiOWM1",
    "UserId": "chatchawal",
    "UserName": "[MASKED_FULLNAME]",
    "UserAuthenDatetime": "2020-02-19 13:24:35",
    "UserAuthenStatus": "Y",
    "UserAuthenEver": null
  },
  {
    "UserIdApi": "NDY5NWYwYTQ1NDliZDJj",
    "UserId": "chatchawal",
    "UserName": "[MASKED_FULLNAME]",
    "UserAuthenDatetime": "2020-04-29 10:16:30",
    "UserAuthenStatus": "Y",
    "UserAuthenEver": null
  },
  {
    "UserIdApi": "NGEwZTM1ZGI1YmE0MzZm",
    "UserId": "chatchawal",
    "UserName": "[MASKED_FULLNAME]",
    "UserAuthenDatetime": "2020-03-18 12:08:09",
    "UserAuthenStatus": "Y",
    "UserAuthenEver": null
  },
  {
    "UserIdApi": "NjExNjg3OTE0YTc0MGEy",
    "UserId": "chatchawal",
    "UserName": "[MASKED_FULLNAME]",
    "UserAuthenDatetime": "2020-08-17 16:02:11",
    "UserAuthenStatus": "Y",
    "UserAuthenEver": null
  }
]
```
