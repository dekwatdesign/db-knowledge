# `tambol`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tambol_code | char(6) | NO | PRI |  |  |  |
| tambol_name | varchar(150) | YES |  | NULL |  |  |
| district_code | char(4) | YES | MUL | NULL |  |  |
| full_address_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_district_code | district_code | no | 1 |
| ix_tambol_name_uni | district_code | yes | 1 |
| ix_tambol_name_uni | tambol_name | yes | 2 |
| PRIMARY | tambol_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tambol_code": "100101",
    "tambol_name": "พระบรมมหาราชวัง",
    "district_code": "1001",
    "full_address_name": "ต.พระบรมมหาราชวัง อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "tambol_code": "100102",
    "tambol_name": "วังบูรพาภิรมย์",
    "district_code": "1001",
    "full_address_name": "ต.วังบูรพาภิรมย์ อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "tambol_code": "100103",
    "tambol_name": "วัดราชบพิธ",
    "district_code": "1001",
    "full_address_name": "ต.วัดราชบพิธ อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "tambol_code": "100104",
    "tambol_name": "สำราญราษฎร์",
    "district_code": "1001",
    "full_address_name": "ต.สำราญราษฎร์ อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "tambol_code": "100105",
    "tambol_name": "ศาลเจ้าพ่อเสือ",
    "district_code": "1001",
    "full_address_name": "ต.ศาลเจ้าพ่อเสือ อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "tambol_code": "100106",
    "tambol_name": "เสาชิงช้า",
    "district_code": "1001",
    "full_address_name": "ต.เสาชิงช้า อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "tambol_code": "100107",
    "tambol_name": "บวรนิเวศ",
    "district_code": "1001",
    "full_address_name": "ต.บวรนิเวศ อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "tambol_code": "100108",
    "tambol_name": "ตลาดยอด",
    "district_code": "1001",
    "full_address_name": "ต.ตลาดยอด อ.เขตพระนคร จ.กรุงเทพมหานคร"
  }
]
```
