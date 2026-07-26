# `person_address`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_address_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| addrpart | varchar(25) | YES |  | NULL |  |  |
| moopart | varchar(10) | YES |  | NULL |  |  |
| road | varchar(50) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vid | varchar(8) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_address_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_address_id": 1,
    "person_id": 30002,
    "addrpart": "114 ม.18",
    "moopart": "",
    "road": "",
    "chwpart": "67",
    "amppart": "02",
    "tmbpart": "04",
    "hos_guid": null,
    "vid": null
  },
  {
    "person_address_id": 2,
    "person_id": 28295,
    "addrpart": "",
    "moopart": "",
    "road": "",
    "chwpart": "",
    "amppart": "",
    "tmbpart": "",
    "hos_guid": null,
    "vid": null
  },
  {
    "person_address_id": 3,
    "person_id": 44374,
    "addrpart": "166/168 ม.6",
    "moopart": "",
    "road": "",
    "chwpart": "10",
    "amppart": "21",
    "tmbpart": "03",
    "hos_guid": null,
    "vid": null
  },
  {
    "person_address_id": 4,
    "person_id": 36290,
    "addrpart": "488/43 หมู่บ้านกลางกรุง",
    "moopart": "",
    "road": "",
    "chwpart": "10",
    "amppart": "39",
    "tmbpart": "02",
    "hos_guid": null,
    "vid": null
  },
  {
    "person_address_id": 5,
    "person_id": 44428,
    "addrpart": "994  หมู่ 3 ถ.เทพารักษ์",
    "moopart": "",
    "road": "",
    "chwpart": "11",
    "amppart": "01",
    "tmbpart": "02",
    "hos_guid": null,
    "vid": null
  },
  {
    "person_address_id": 6,
    "person_id": 30627,
    "addrpart": "28/55 ม.2",
    "moopart": "",
    "road": "",
    "chwpart": "11",
    "amppart": "01",
    "tmbpart": "03",
    "hos_guid": null,
    "vid": null
  },
  {
    "person_address_id": 7,
    "person_id": 23158,
    "addrpart": "50",
    "moopart": "",
    "road": "",
    "chwpart": "11",
    "amppart": "01",
    "tmbpart": "01",
    "hos_guid": null,
    "vid": null
  },
  {
    "person_address_id": 8,
    "person_id": 31546,
    "addrpart": "32  ถ.อมรเดช",
    "moopart": "",
    "road": "",
    "chwpart": "11",
    "amppart": "01",
    "tmbpart": "01",
    "hos_guid": null,
    "vid": null
  }
]
```
