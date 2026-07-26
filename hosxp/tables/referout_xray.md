# `referout_xray`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(50) | YES |  | NULL |  |  |
| xrayroom | varchar(500) | YES |  | NULL |  |  |
| reqno | varchar(50) | YES |  | NULL |  |  |
| resvalue | varchar(3000) | YES |  | NULL |  |  |
| resdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "refer_no": "11147-1-55999003",
    "hn": "0248015",
    "xrayroom": "X204:Chest-(เอกซเรย์ประจำปี บุคคลทั่วไป)",
    "reqno": "X52-41798",
    "resvalue": "Normal Chest.",
    "resdate": "2009-06-16 09:07:00"
  },
  {
    "refer_no": "11147-1-55999003",
    "hn": "0248015",
    "xrayroom": "X166:Paranasal Sinus",
    "reqno": "X53-42153",
    "resvalue": "Clouding of bilateral maxillary sinuses, sinusitis is possible.",
    "resdate": "2010-05-17 15:50:00"
  },
  {
    "refer_no": "11147-1-55999003",
    "hn": "0248015",
    "xrayroom": "X204:Chest-(เอกซเรย์ประจำปี บุคคลทั่วไป)",
    "reqno": "X53-45368",
    "resvalue": "Chest (PA) :\r\n                   Normal heart size and lungs.\r\n                   No active pulmonary infiltration.\r\n                   No pleurisy.\r\n                   Intact bone.",
    "resdate": "2010-06-15 14:33:00"
  },
  {
    "refer_no": "11157-1-56000001",
    "hn": "0248015",
    "xrayroom": "X204:Chest-(เอกซเรย์ประจำปี บุคคลทั่วไป)",
    "reqno": "X52-41798",
    "resvalue": "Normal Chest.",
    "resdate": "2009-06-16 09:07:00"
  },
  {
    "refer_no": "11157-1-56000001",
    "hn": "0248015",
    "xrayroom": "X166:Paranasal Sinus",
    "reqno": "X53-42153",
    "resvalue": "Clouding of bilateral maxillary sinuses, sinusitis is possible.",
    "resdate": "2010-05-17 15:50:00"
  },
  {
    "refer_no": "11157-1-56000001",
    "hn": "0248015",
    "xrayroom": "X204:Chest-(เอกซเรย์ประจำปี บุคคลทั่วไป)",
    "reqno": "X53-45368",
    "resvalue": "Chest (PA) :\r\n                   Normal heart size and lungs.\r\n                   No active pulmonary infiltration.\r\n                   No pleurisy.\r\n                   Intact bone.",
    "resdate": "2010-06-15 14:33:00"
  }
]
```
