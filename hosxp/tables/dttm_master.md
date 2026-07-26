# `dttm_master`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| master_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| name | name | no | 1 |
| PRIMARY | master_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "master_id": 1,
    "name": "ทันตวินิจฉัย",
    "hos_guid": null
  },
  {
    "master_id": 2,
    "name": "ทันตรังสี",
    "hos_guid": null
  },
  {
    "master_id": 3,
    "name": "งานเวชศาสตร์ช่องปาก",
    "hos_guid": null
  },
  {
    "master_id": 4,
    "name": "ทันตกรรมหัตถการ",
    "hos_guid": null
  },
  {
    "master_id": 5,
    "name": "งานรักษาคลองรากฟัน",
    "hos_guid": null
  },
  {
    "master_id": 6,
    "name": "งานรักษาโรคปริทันต์",
    "hos_guid": null
  },
  {
    "master_id": 7,
    "name": "งานทันตกรรมป้องกัน",
    "hos_guid": null
  },
  {
    "master_id": 8,
    "name": "งานทันตกรรมสำหรับเด็ก",
    "hos_guid": null
  }
]
```
