# `f43_causein`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "id": 1,
    "name": "เพื่อการวินิจฉัยและรักษา",
    "hos_guid": null
  },
  {
    "id": 2,
    "name": "เพื่อการวินิจฉัย",
    "hos_guid": null
  },
  {
    "id": 3,
    "name": "เพื่อการรักษาและฟื้นฟูต่อเนื่อง",
    "hos_guid": null
  },
  {
    "id": 4,
    "name": "เพื่อการดูแลต่อใกล้บ้าน",
    "hos_guid": null
  },
  {
    "id": 5,
    "name": "ตามความต้องการของผู้ป่วย",
    "hos_guid": null
  }
]
```
