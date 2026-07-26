# `opdscreen_advice_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_advice_item_id | int(11) | NO | PRI | 0 |  |  |
| opdscreen_advice_item_name | varchar(200) | YES | UNI | NULL |  |  |
| clinic | char(3) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic | clinic | no | 1 |
| ix_opdscreen_advice_item_name | opdscreen_advice_item_name | yes | 1 |
| PRIMARY | opdscreen_advice_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "opdscreen_advice_item_id": 1,
    "opdscreen_advice_item_name": "การใช้ยา",
    "clinic": null
  },
  {
    "opdscreen_advice_item_id": 2,
    "opdscreen_advice_item_name": "การปฏิบัติตัวให้เหมาะสมกับโรค",
    "clinic": null
  },
  {
    "opdscreen_advice_item_id": 3,
    "opdscreen_advice_item_name": "การรับประทานอาหาร",
    "clinic": null
  },
  {
    "opdscreen_advice_item_id": 4,
    "opdscreen_advice_item_name": "การมาตรวจตามนัด",
    "clinic": null
  },
  {
    "opdscreen_advice_item_id": 5,
    "opdscreen_advice_item_name": "การออกกำลังกาย",
    "clinic": null
  },
  {
    "opdscreen_advice_item_id": 6,
    "opdscreen_advice_item_name": "การป้องกันภาวะแทรกซ้อน",
    "clinic": null
  },
  {
    "opdscreen_advice_item_id": 7,
    "opdscreen_advice_item_name": "ผิดปกติมาพบแพทย์",
    "clinic": null
  }
]
```
