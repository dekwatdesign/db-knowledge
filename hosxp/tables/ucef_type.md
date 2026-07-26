# `ucef_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(15) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

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
    "code": "21101",
    "name": "เตียงสามัญ (400 บาท /วัน)"
  },
  {
    "code": "1002",
    "name": "1.0.2 ลวดยึดกะโหลกแบบไตตาเนียม (Titanium wire) (200 บาท /เส้น)"
  },
  {
    "code": "1003",
    "name": "1.0.3 เยื่อหุ้มสมองเทียม (Dural substitue) (9000 บาท /แผ่น)"
  },
  {
    "code": "1101",
    "name": "1.1.1 ชุดท่อต่อช่องสมอง (External ventricular drainage system) (4500 บาท /ชุด)"
  },
  {
    "code": "1103",
    "name": "1.1.3 ชุดวัดความดันภายใต้กะโหลกศีรษะ (Continuous intracranial pressure monitoring system) (18000 บาท /ชุด)"
  },
  {
    "code": "1104",
    "name": "1.1.4 คีมหนีบหลอดเลือดโป่งพองในช่องกะโหลกศีรษะ (Aneurysm clip for Intracranial aneurysm) (6700 บาท /อัน)"
  },
  {
    "code": "1111",
    "name": "1.1.11 คีมหนีบหลอดเลือดโป่งพองในช่องกะโหลกศีรษะชนิด รูปร่างพิเศษ (Fenestrate clip)  (10000 บาท /ชิ้น )"
  },
  {
    "code": "2010",
    "name": "2.0.10 วัสดุเสริมกระดูกเบ้าตาที่ทำจาก Polyethylene  (10000 บาท /แผ่น)"
  }
]
```
