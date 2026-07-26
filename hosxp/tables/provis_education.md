# `provis_education`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "0",
    "name": "ไม่ได้ศึกษา/ไม่มีวุฒิการศึกษา",
    "hos_guid": null
  },
  {
    "code": "1",
    "name": "ก่อนประถมศึกษา   หมายถึง   ระดับการศึกษา   เตรียมอนุบาล,อนุบาล,เด็กเล็ก,ต่ำกว่าประถมศึกษา",
    "hos_guid": null
  },
  {
    "code": "2",
    "name": "ประถมศึกษา         หมายถึง     ระดับการศึกษา     ประถมศึกษาปีที่ 1-7",
    "hos_guid": null
  },
  {
    "code": "3",
    "name": "มัธยมศึกษา           หมายถึง     ระดับการศึกษา  มัธยมศึกษาตอนต้น (ม.1-3) / มัธยมศึกษา",
    "hos_guid": null
  },
  {
    "code": "4",
    "name": "สายสามัญ (ม.ศ.4-5) / มัธยมศึกษา(ม.1-8) / ประกาศนียบัตรวิชาชีพ (ปวช.)",
    "hos_guid": null
  },
  {
    "code": "5",
    "name": "ปริญญาตรี            หมายถึง   ระดับการศึกษา   ปริญญาตรี,ประกาศนียบัตรวิชาชีพเทคนิคครูชั้นสูง   ประกาศนียบัตรบัณฑิต",
    "hos_guid": null
  },
  {
    "code": "6",
    "name": "สูงกว่าปริญญาตรี    หมายถึง   ระดับการศึกษา  ปริญญาโท,ประกาศนียบัตรบัณฑิตชั้นสูง",
    "hos_guid": null
  },
  {
    "code": "9",
    "name": "ไม่ระบุ/ไม่ทราบ     หมายถึง     ไม่ได้ระบุไว้ตามที่กำหนด",
    "hos_guid": null
  }
]
```
