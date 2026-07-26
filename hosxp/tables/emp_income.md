# `emp_income`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_income_id | char(2) | NO | PRI |  |  |  |
| emp_income_name | varchar(200) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | emp_income_name | no | 1 |
| PRIMARY | emp_income_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_income_id": "09",
    "emp_income_name": "ค่าตรวจวินิจฉัยโดยวิธีพิเศษอื่นๆ"
  },
  {
    "emp_income_id": "07",
    "emp_income_name": "ค่าตรวจวินิจฉัยทางเทคนิคการแพทย์และพยาธิวิทยา"
  },
  {
    "emp_income_id": "08",
    "emp_income_name": "ค่าตรวจวินิจฉัยและรักษาทางรังสีวิทยา"
  },
  {
    "emp_income_id": "11",
    "emp_income_name": "ค่าทำหัตถการ และวิสัญญี"
  },
  {
    "emp_income_id": "14",
    "emp_income_name": "ค่าบริการทางกายภาพบำบัดและทางเวชกรรมฟื้นฟู"
  },
  {
    "emp_income_id": "13",
    "emp_income_name": "ค่าบริการทางทันตกรรม"
  },
  {
    "emp_income_id": "12",
    "emp_income_name": "ค่าบริการทางพยาบาล"
  },
  {
    "emp_income_id": "15",
    "emp_income_name": "ค่าบริการฝังเข็ม และค่าบริการการให้การบำบัดของผู้ประกอบโรคศิลปะอื่น"
  }
]
```
