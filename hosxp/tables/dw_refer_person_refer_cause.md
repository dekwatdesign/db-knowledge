# `dw_refer_person_refer_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_refer_cause_id | int(11) | NO | PRI | 0 |  |  |
| person_refer_cause_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_refer_cause_name | person_refer_cause_name | yes | 1 |
| PRIMARY | person_refer_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_refer_cause_id": 1,
    "person_refer_cause_name": "วินิจฉัย ชันสูตร/ส่งต่อ",
    "hos_guid": null
  },
  {
    "person_refer_cause_id": 2,
    "person_refer_cause_name": "ขีดความสามารถไม่เพียงพอ ด้านบุคลากร",
    "hos_guid": null
  },
  {
    "person_refer_cause_id": 3,
    "person_refer_cause_name": "ขีดความสามารถไม่เพียงพอ ด้านเครื่องมือ/สถานที่",
    "hos_guid": null
  },
  {
    "person_refer_cause_id": 4,
    "person_refer_cause_name": "ขีดความสามารถไม่เพียงพอ ด้านบุคลากร เครื่องมือและสถานที่",
    "hos_guid": null
  },
  {
    "person_refer_cause_id": 5,
    "person_refer_cause_name": "ขีดความสามารถไม่เพียงพอ ด้านวิชาการ",
    "hos_guid": null
  },
  {
    "person_refer_cause_id": 6,
    "person_refer_cause_name": "ขีดความสามารถเพียงพอ แต่จำเป็น เช่นผ่าตัด",
    "hos_guid": null
  },
  {
    "person_refer_cause_id": 7,
    "person_refer_cause_name": "ขีดความสามารถเพียงพอ แต่ผู้ป่วย/ญาติ ต้องการ",
    "hos_guid": null
  },
  {
    "person_refer_cause_id": 8,
    "person_refer_cause_name": "ขีดความสามารถเพียงพอ แต่ต้องการใช้สิทธิ",
    "hos_guid": null
  }
]
```
