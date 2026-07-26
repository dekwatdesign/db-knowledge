# `onlineuser_idle`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| onlineid | varchar(50) | NO | PRI |  |  |  |
| last_active | int(11) | YES |  | NULL |  |  |
| db_connection | int(11) | YES |  | NULL |  |  |
| status_flag | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | onlineid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "onlineid": "{4CF5DA12-4394-4561-B690-3A27D77D68D1}",
    "last_active": 1708086356,
    "db_connection": null,
    "status_flag": null
  },
  {
    "onlineid": "{65945C0C-680F-4F12-8282-1A5B10901E96}",
    "last_active": 1711625785,
    "db_connection": null,
    "status_flag": null
  },
  {
    "onlineid": "{67093647-4CBA-4045-8C3B-4C2FD6361C7A}",
    "last_active": 1728637438,
    "db_connection": null,
    "status_flag": null
  },
  {
    "onlineid": "{7390E619-7A0A-48F3-8CD5-5B30E5824F16}",
    "last_active": 1708085805,
    "db_connection": null,
    "status_flag": null
  },
  {
    "onlineid": "{99EE825C-31EA-4568-82C8-AE386939A1DF}",
    "last_active": 1703595818,
    "db_connection": null,
    "status_flag": null
  },
  {
    "onlineid": "{9E10BA20-49FF-47B9-9EC3-DBF6E62C57E1}",
    "last_active": 1728637764,
    "db_connection": null,
    "status_flag": null
  },
  {
    "onlineid": "{DA39BB7D-FA24-488E-94A8-F611D4517D67}",
    "last_active": 1703071248,
    "db_connection": null,
    "status_flag": null
  }
]
```
