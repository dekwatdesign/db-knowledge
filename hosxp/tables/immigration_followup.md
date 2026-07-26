# `immigration_followup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| immigration_followup_id | int(11) | NO | PRI | 0 |  |  |
| immigration_followup_name | varchar(250) | YES |  | NULL |  |  |
| immigration_followup_type | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | immigration_followup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "immigration_followup_id": 1,
    "immigration_followup_name": "วัณโรค",
    "immigration_followup_type": 2,
    "hos_guid": null
  },
  {
    "immigration_followup_id": 2,
    "immigration_followup_name": "โรคเท้าช้าง",
    "immigration_followup_type": 2,
    "hos_guid": null
  },
  {
    "immigration_followup_id": 3,
    "immigration_followup_name": "โรคเรื้อน",
    "immigration_followup_type": 2,
    "hos_guid": null
  },
  {
    "immigration_followup_id": 4,
    "immigration_followup_name": "โรคซิฟิลิส",
    "immigration_followup_type": 2,
    "hos_guid": null
  },
  {
    "immigration_followup_id": 5,
    "immigration_followup_name": "โรคมาลาเรีย",
    "immigration_followup_type": 2,
    "hos_guid": null
  },
  {
    "immigration_followup_id": 6,
    "immigration_followup_name": "โรคอื่นๆ",
    "immigration_followup_type": 2,
    "hos_guid": null
  },
  {
    "immigration_followup_id": 7,
    "immigration_followup_name": "วัณโรคในระยะติดต่อ",
    "immigration_followup_type": 3,
    "hos_guid": null
  },
  {
    "immigration_followup_id": 8,
    "immigration_followup_name": "โรคเรื้อนในระยะที่ปรากฏอาการเป็นที่น่ารังเกียจแก่สังคม",
    "immigration_followup_type": 3,
    "hos_guid": null
  }
]
```
