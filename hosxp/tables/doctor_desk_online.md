# `doctor_desk_online`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_desk_online_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| ip_address | varchar(100) | YES |  | NULL |  |  |
| online_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_desk_online_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_desk_online_id": 179921,
    "doctor_code": "001",
    "ip_address": "192.168.1.112",
    "online_datetime": "2016-05-04 06:41:01",
    "hos_guid": null
  },
  {
    "doctor_desk_online_id": 265115,
    "doctor_code": "156",
    "ip_address": "192.168.1.112",
    "online_datetime": "2018-03-26 14:27:40",
    "hos_guid": null
  },
  {
    "doctor_desk_online_id": 291567,
    "doctor_code": "300",
    "ip_address": "192.168.1.71",
    "online_datetime": "2018-10-03 12:39:53",
    "hos_guid": null
  },
  {
    "doctor_desk_online_id": 300045,
    "doctor_code": "247",
    "ip_address": "192.168.1.92",
    "online_datetime": "2018-12-06 10:09:24",
    "hos_guid": null
  },
  {
    "doctor_desk_online_id": 401959,
    "doctor_code": "303",
    "ip_address": "192.168.1.149",
    "online_datetime": "2022-02-22 09:01:21",
    "hos_guid": null
  },
  {
    "doctor_desk_online_id": 424022,
    "doctor_code": "269",
    "ip_address": "192.168.1.9",
    "online_datetime": "2022-10-17 08:30:36",
    "hos_guid": null
  },
  {
    "doctor_desk_online_id": 424640,
    "doctor_code": "086",
    "ip_address": "192.168.1.12",
    "online_datetime": "2022-10-21 08:55:52",
    "hos_guid": null
  },
  {
    "doctor_desk_online_id": 499806,
    "doctor_code": "128",
    "ip_address": "192.168.10.41",
    "online_datetime": "2024-07-10 09:49:34",
    "hos_guid": null
  }
]
```
