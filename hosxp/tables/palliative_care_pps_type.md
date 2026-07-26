# `palliative_care_pps_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_pps_type_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_pps_type_level | varchar(255) | YES |  | NULL |  |  |
| palliative_care_pps_type_move | varchar(255) | YES |  | NULL |  |  |
| palliative_care_pps_type_activity | varchar(255) | YES |  | NULL |  |  |
| palliative_care_pps_type_practice | varchar(255) | YES |  | NULL |  |  |
| palliative_care_pps_type_food | varchar(255) | YES |  | NULL |  |  |
| palliative_care_pps_type_sens | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_pps_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "palliative_care_pps_type_id": 1,
    "palliative_care_pps_type_level": "100 %",
    "palliative_care_pps_type_move": "เคลื่อนไหวปกติ",
    "palliative_care_pps_type_activity": "ทำกิจกรรมและทำงานได้ตามปกติ ไม่มีอาการของโรค",
    "palliative_care_pps_type_practice": "ทำได้เอง",
    "palliative_care_pps_type_food": "ปกติ",
    "palliative_care_pps_type_sens": "รู้สึกตัวดี",
    "hos_guid": null
  },
  {
    "palliative_care_pps_type_id": 2,
    "palliative_care_pps_type_level": "90 %",
    "palliative_care_pps_type_move": "เคลื่อนไหวปกติ",
    "palliative_care_pps_type_activity": "ทำกิจกรรมและทำงานได้ตามปกติ มีอาการของโรคบางอาการ",
    "palliative_care_pps_type_practice": "ทำได้เอง",
    "palliative_care_pps_type_food": "ปกติ",
    "palliative_care_pps_type_sens": "รู้สึกตัวดี",
    "hos_guid": null
  },
  {
    "palliative_care_pps_type_id": 3,
    "palliative_care_pps_type_level": "80%",
    "palliative_care_pps_type_move": "เคลื่อนไหวปกติ",
    "palliative_care_pps_type_activity": "ต้องออกแรงอย่างมากในการทำกิจกรรม ตามปกติมีอาการของโรคบางอาการ",
    "palliative_care_pps_type_practice": "ทำได้เอง",
    "palliative_care_pps_type_food": "ปกติ หรือ ลดลง",
    "palliative_care_pps_type_sens": "รู้สึกตัวดี",
    "hos_guid": null
  },
  {
    "palliative_care_pps_type_id": 4,
    "palliative_care_pps_type_level": "70 %",
    "palliative_care_pps_type_move": "ความสามารถในการเคลื่อนไหวลดลง",
    "palliative_care_pps_type_activity": "ไม่สามารถทำงานได้ตามปกติมีอาการของโรคอย่างมาก",
    "palliative_care_pps_type_practice": "ทำได้เอง",
    "palliative_care_pps_type_food": "ปกติ หรือ ลดลง",
    "palliative_care_pps_type_sens": "รู้สึกตัวดี",
    "hos_guid": null
  },
  {
    "palliative_care_pps_type_id": 5,
    "palliative_care_pps_type_level": "60 %",
    "palliative_care_pps_type_move": "ความสามารถในการเคลื่อนไหวลดลง",
    "palliative_care_pps_type_activity": "ไม่สามารถทำงานอดิเรก/งานบ้านได้ มีอาการของโรคอย่างมาก",
    "palliative_care_pps_type_practice": "ต้องการความช่วยเหลือเป็นครั้งคราว",
    "palliative_care_pps_type_food": "ปกติ หรือลดลง",
    "palliative_care_pps_type_sens": "รู้สึกตัวดี หรือ สับสน",
    "hos_guid": null
  },
  {
    "palliative_care_pps_type_id": 6,
    "palliative_care_pps_type_level": "50  %",
    "palliative_care_pps_type_move": "นั่ง/นอน เป็นส่วนใหญ่",
    "palliative_care_pps_type_activity": "ไม่สามารถทำงานได้เลย มีการลุกลามของโรคมากขึ้น",
    "palliative_care_pps_type_practice": "ต้องการความช่วยเหลือในการปฏิบัติกิจกรรมบางอย่าง",
    "palliative_care_pps_type_food": "ปกติ หรือ  ลดลง",
    "palliative_care_pps_type_sens": "รู้สึกตัวดี หรือ สับสน",
    "hos_guid": null
  },
  {
    "palliative_care_pps_type_id": 7,
    "palliative_care_pps_type_level": "40  %",
    "palliative_care_pps_type_move": "นอนอยู่บนเตียงเป็นส่วนใหญ่",
    "palliative_care_pps_type_activity": "ทำกิจกรรมได้น้อยมาก มีการลุกลามของโรคมากขึ้น",
    "palliative_care_pps_type_practice": "ต้องการความช่วยเหลือเป็นส่วนใหญ่",
    "palliative_care_pps_type_food": "ปกติ หรือ ลดลง",
    "palliative_care_pps_type_sens": "รู้สึกตัวดี หรือ ง่วงซึม +/- สับสน",
    "hos_guid": null
  },
  {
    "palliative_care_pps_type_id": 8,
    "palliative_care_pps_type_level": "30  %",
    "palliative_care_pps_type_move": "อยู่บนเตียงตลอดเวลา",
    "palliative_care_pps_type_activity": "ไม่สามารถทำกิจกรรมใดๆ มีการลุกลามของโรคมากขึ้น",
    "palliative_care_pps_type_practice": "ต้องการการดูแลทั้งหมด",
    "palliative_care_pps_type_food": "ปกติหรือ ลดลง",
    "palliative_care_pps_type_sens": "รู้สึกตัวดี หรือ ง่วงซึม +/- สับสน",
    "hos_guid": null
  }
]
```
