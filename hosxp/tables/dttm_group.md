# `dttm_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dttm_group_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| master_id | int(11) | YES |  | NULL |  |  |
| group_level | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| name | name | no | 1 |
| PRIMARY | dttm_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dttm_group_id": 110,
    "name": "ตรวจ 1",
    "master_id": 1,
    "group_level": "1.1",
    "hos_guid": null
  },
  {
    "dttm_group_id": 120,
    "name": "ตรวจ 2",
    "master_id": 1,
    "group_level": "1.2",
    "hos_guid": null
  },
  {
    "dttm_group_id": 130,
    "name": "ตรวจ 3",
    "master_id": 1,
    "group_level": "1.3",
    "hos_guid": null
  },
  {
    "dttm_group_id": 210,
    "name": "ทันตรังสี 1",
    "master_id": 2,
    "group_level": "2.1",
    "hos_guid": null
  },
  {
    "dttm_group_id": 220,
    "name": "ทันตรังสี 2",
    "master_id": 2,
    "group_level": "2.2",
    "hos_guid": null
  },
  {
    "dttm_group_id": 310,
    "name": "เวชศาสตร์ช่องปาก 1",
    "master_id": 3,
    "group_level": "3.1",
    "hos_guid": null
  },
  {
    "dttm_group_id": 320,
    "name": "เวชศาสตร์ช่องปาก 2",
    "master_id": 3,
    "group_level": "3.2",
    "hos_guid": null
  },
  {
    "dttm_group_id": 330,
    "name": "เวชศาสตร์ช่องปาก 3",
    "master_id": 3,
    "group_level": "3.3",
    "hos_guid": null
  }
]
```
