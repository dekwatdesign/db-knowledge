# `hospital_executive_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_executive_position_id | int(11) | NO | PRI | 0 |  |  |
| hospital_executive_position_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_executive_position_name | hospital_executive_position_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_executive_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "hospital_executive_position_id": 1,
    "hospital_executive_position_name": "ประธานกรรมการโรงพยาบาล",
    "hos_guid": null
  },
  {
    "hospital_executive_position_id": 2,
    "hospital_executive_position_name": "ผู้อำนวยการ",
    "hos_guid": null
  },
  {
    "hospital_executive_position_id": 3,
    "hospital_executive_position_name": "ประธานองค์กรแพทย์",
    "hos_guid": null
  },
  {
    "hospital_executive_position_id": 4,
    "hospital_executive_position_name": "ผอ./รองฝ่ายการแพทย์",
    "hos_guid": null
  },
  {
    "hospital_executive_position_id": 5,
    "hospital_executive_position_name": "ผอ./รองฝ่ายบริหาร",
    "hos_guid": null
  },
  {
    "hospital_executive_position_id": 6,
    "hospital_executive_position_name": "ผอ./รองฝ่ายปฏิบัติการ",
    "hos_guid": null
  },
  {
    "hospital_executive_position_id": 7,
    "hospital_executive_position_name": "หัวหน้าพยาบาล",
    "hos_guid": null
  }
]
```
