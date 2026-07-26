# `opitemrece_pay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| pay_staff | varchar(25) | YES |  | NULL |  |  |
| pay_datetime | datetime | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hos_guid": "{00000150-6A36-478A-BF28-AC905B6973C5}",
    "pay_staff": "085",
    "pay_datetime": "2016-01-06 14:45:15",
    "vn": "590106140006",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{000002F8-FE5D-412A-85D0-1555FF188F06}",
    "pay_staff": "085",
    "pay_datetime": "2019-05-29 09:52:59",
    "vn": "620529091927",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00001038-5E66-4B96-BBA8-B526DDAAA925}",
    "pay_staff": "085",
    "pay_datetime": "2024-01-23 10:09:39",
    "vn": "670123083204",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00001C97-FFAE-44BD-8023-0DF4311CAEB3}",
    "pay_staff": "086",
    "pay_datetime": "2017-03-28 09:54:21",
    "vn": "600328090044",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00002308-0111-44FC-882E-511EF7B6AF09}",
    "pay_staff": "085",
    "pay_datetime": "2017-03-09 10:37:31",
    "vn": "600309090057",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00002D65-D09A-4782-93F9-B239988B51CA}",
    "pay_staff": "0022",
    "pay_datetime": "2024-08-29 10:10:59",
    "vn": "670829093607",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00003057-2454-4317-94D1-D157602E4F97}",
    "pay_staff": "085",
    "pay_datetime": "2019-10-07 10:02:14",
    "vn": "621007093014",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{0000345F-2842-4879-9700-017AF4361DCB}",
    "pay_staff": "339",
    "pay_datetime": "2024-05-15 14:26:38",
    "vn": "670515130040",
    "hos_guid_ext": null
  }
]
```
