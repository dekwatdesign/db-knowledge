# `sss_chronic_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "name": "โรคเบาหวาน",
    "hos_guid": null
  },
  {
    "id": 2,
    "name": "โรคความดันสูง",
    "hos_guid": null
  },
  {
    "id": 3,
    "name": "โรคตับอักเสบเรื้อรังและโรคตับแข็ง",
    "hos_guid": null
  },
  {
    "id": 4,
    "name": "โรคภาวะหัวใจล้มเหลว",
    "hos_guid": null
  },
  {
    "id": 5,
    "name": "โรคเส้นเลือดสมองแตก / อุดตัน",
    "hos_guid": null
  },
  {
    "id": 6,
    "name": "โรคมะเร็ง",
    "hos_guid": null
  },
  {
    "id": 7,
    "name": "โรคภูมิคุ้มกันบกพร่อง",
    "hos_guid": null
  },
  {
    "id": 8,
    "name": "โรคถุมลมโป่งพอง",
    "hos_guid": null
  }
]
```
