# `naranjo_algorithm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| naranjo_algorithm_id | int(11) | NO | PRI | 0 |  |  |
| naranjo_algorithm_name | varchar(250) | YES | UNI | NULL |  |  |
| score_yes | int(11) | YES |  | NULL |  |  |
| score_no | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_naranjo_algorithm_name | naranjo_algorithm_name | yes | 1 |
| PRIMARY | naranjo_algorithm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "naranjo_algorithm_id": 1,
    "naranjo_algorithm_name": "เคยมีสรุปหรือรายงานการปฏิกริยานี้มาแล้วหรือไม่",
    "score_yes": 1,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "naranjo_algorithm_id": 2,
    "naranjo_algorithm_name": "อาการไม่พึงประสงค์นี้เกิดขึ้นภายหลังจากได้รับยาที่คิดว่าเป็นสาเหตุหรือไม่",
    "score_yes": 2,
    "score_no": -1,
    "hos_guid": null
  },
  {
    "naranjo_algorithm_id": 3,
    "naranjo_algorithm_name": "อาการไม่พึงประสงค์นี้ดีขึ้นเมื่อหยุดยาดังกล่าว หรือเมื่อให้ยาต้านที่จำเพาะเจาะจง (specific antagonist) หรือไม่",
    "score_yes": 1,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "naranjo_algorithm_id": 4,
    "naranjo_algorithm_name": "อาการไม่พึงประสงค์ดังกล่าวเกิดขึ้นอีกเมื่อเริ่มให้ยาใหม่หรือไม่",
    "score_yes": 2,
    "score_no": -1,
    "hos_guid": null
  },
  {
    "naranjo_algorithm_id": 5,
    "naranjo_algorithm_name": "ปฏิกริยาที่เกิดขึ้นสามารถเกิดจากสาเหตุอื่น (นอกเหนือจากยา) ของผู้ป่วยได้หรือไม่",
    "score_yes": -1,
    "score_no": 2,
    "hos_guid": null
  },
  {
    "naranjo_algorithm_id": 6,
    "naranjo_algorithm_name": "ปฏิกริยาดังกล่าวเกิดขึ้นอีก เมื่อให้ยาหลอกหรือไม่",
    "score_yes": -1,
    "score_no": 1,
    "hos_guid": null
  },
  {
    "naranjo_algorithm_id": 7,
    "naranjo_algorithm_name": "สามารถตรวจวัดปริมาณยาได้ในเลือด (หรือของเหลวอื่น) ในปริมาณความเข้มข้นที่เป็นพิษหรือไม่",
    "score_yes": 1,
    "score_no": 0,
    "hos_guid": null
  },
  {
    "naranjo_algorithm_id": 8,
    "naranjo_algorithm_name": "ปฏิกริยารุนแรงขึ้น เมื่อเพิ่มขนาดยาหรือลดความรุนแรงลงเมื่อลดขนาดยาหรือไม่",
    "score_yes": 1,
    "score_no": 0,
    "hos_guid": null
  }
]
```
