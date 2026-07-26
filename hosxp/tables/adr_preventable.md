# `adr_preventable`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_preventable_id | int(11) | NO | PRI | 0 |  |  |
| adr_preventable_name | varchar(250) | YES | UNI | NULL |  |  |
| score_yes | int(11) | YES |  | NULL |  |  |
| score_no | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_preventable_name | adr_preventable_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_preventable_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "adr_preventable_id": 1,
    "adr_preventable_name": "การใช้ยานั้นไม่เหมาะสมกับภาวะทางคลินิกหรือไม่",
    "score_yes": 1,
    "score_no": null,
    "hos_guid": null
  },
  {
    "adr_preventable_id": 2,
    "adr_preventable_name": "ขนาดใช้ วิธีการให้ยา ความถี่ ไม่เหมาะสมกับ อายุ น้ำหนัก หรือภาวะโรคหรือไม่",
    "score_yes": 1,
    "score_no": null,
    "hos_guid": null
  },
  {
    "adr_preventable_id": 3,
    "adr_preventable_name": "ไม่มีการติดตามระดับยาหรือ Lab ที่จำเป็นหรือไม่",
    "score_yes": 1,
    "score_no": null,
    "hos_guid": null
  },
  {
    "adr_preventable_id": 4,
    "adr_preventable_name": "ผู้ป่วยมีประวัติแพ้ยาหรือไม่",
    "score_yes": 1,
    "score_no": null,
    "hos_guid": null
  },
  {
    "adr_preventable_id": 5,
    "adr_preventable_name": "มีความเกี่ยวข้องกับปฏิกิริยาระหว่างยาหรือไม่",
    "score_yes": 1,
    "score_no": null,
    "hos_guid": null
  },
  {
    "adr_preventable_id": 6,
    "adr_preventable_name": "มีระดับยาที่บ่งถึงความเป็นพิษหรือไม่",
    "score_yes": 1,
    "score_no": null,
    "hos_guid": null
  },
  {
    "adr_preventable_id": 7,
    "adr_preventable_name": "เกี่ยวข้องกับความร่วมมือในการใช้ยาของผู้ป่วยหรือไม่",
    "score_yes": 1,
    "score_no": null,
    "hos_guid": null
  }
]
```
