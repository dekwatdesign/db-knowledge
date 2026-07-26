# `adr_death`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_death_id | int(11) | NO | PRI | 0 |  |  |
| adr_death_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_death_name | adr_death_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_death_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "adr_death_id": 1,
    "adr_death_name": "เนื่องจากเหตุการณ์ไม่พึงประสงค์",
    "hos_guid": null
  },
  {
    "adr_death_id": 2,
    "adr_death_name": "เนื่องจากอาจเกี่ยวข้องกับผลิตภัณฑ์สุขภาพ",
    "hos_guid": null
  },
  {
    "adr_death_id": 3,
    "adr_death_name": "เนื่องจากสาเหตุอื่นที่ไม่เกี่ยวของกับผลิตภัณฑ์สุขภาพ",
    "hos_guid": null
  }
]
```
