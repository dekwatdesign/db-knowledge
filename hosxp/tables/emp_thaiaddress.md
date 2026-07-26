# `emp_thaiaddress`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_thaiaddress_id | varchar(6) | NO | PRI |  |  |  |
| emp_thaiaddress_name | varchar(50) | YES | MUL | NULL |  |  |
| emp_thaiaddress_chwpart | char(2) | YES | MUL | NULL |  |  |
| emp_thaiaddress_amppart | char(2) | YES | MUL | NULL |  |  |
| emp_thaiaddress_tmbpart | char(2) | YES | MUL | NULL |  |  |
| emp_thaiaddress_codetype | char(1) | YES | MUL | NULL |  |  |
| emp_thaiaddress_full_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_amppart | emp_thaiaddress_amppart | no | 1 |
| ix_chwpart | emp_thaiaddress_chwpart | no | 1 |
| ix_codetype | emp_thaiaddress_codetype | no | 1 |
| ix_name | emp_thaiaddress_name | no | 1 |
| ix_tmbpart | emp_thaiaddress_tmbpart | no | 1 |
| PRIMARY | emp_thaiaddress_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_thaiaddress_id": "000000",
    "emp_thaiaddress_name": "ต่างประเทศ",
    "emp_thaiaddress_chwpart": "00",
    "emp_thaiaddress_amppart": "00",
    "emp_thaiaddress_tmbpart": "00",
    "emp_thaiaddress_codetype": "1",
    "emp_thaiaddress_full_name": null
  },
  {
    "emp_thaiaddress_id": "100000",
    "emp_thaiaddress_name": "กรุงเทพมหานคร",
    "emp_thaiaddress_chwpart": "10",
    "emp_thaiaddress_amppart": "00",
    "emp_thaiaddress_tmbpart": "00",
    "emp_thaiaddress_codetype": "1",
    "emp_thaiaddress_full_name": null
  },
  {
    "emp_thaiaddress_id": "100100",
    "emp_thaiaddress_name": "เขตพระนคร",
    "emp_thaiaddress_chwpart": "10",
    "emp_thaiaddress_amppart": "01",
    "emp_thaiaddress_tmbpart": "00",
    "emp_thaiaddress_codetype": "2",
    "emp_thaiaddress_full_name": null
  },
  {
    "emp_thaiaddress_id": "100101",
    "emp_thaiaddress_name": "พระบรมมหาราชวัง",
    "emp_thaiaddress_chwpart": "10",
    "emp_thaiaddress_amppart": "01",
    "emp_thaiaddress_tmbpart": "01",
    "emp_thaiaddress_codetype": "3",
    "emp_thaiaddress_full_name": "ต.พระบรมมหาราชวัง อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "emp_thaiaddress_id": "100102",
    "emp_thaiaddress_name": "วังบูรพาภิรมย์",
    "emp_thaiaddress_chwpart": "10",
    "emp_thaiaddress_amppart": "01",
    "emp_thaiaddress_tmbpart": "02",
    "emp_thaiaddress_codetype": "3",
    "emp_thaiaddress_full_name": "ต.วังบูรพาภิรมย์ อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "emp_thaiaddress_id": "100103",
    "emp_thaiaddress_name": "วัดราชบพิธ",
    "emp_thaiaddress_chwpart": "10",
    "emp_thaiaddress_amppart": "01",
    "emp_thaiaddress_tmbpart": "03",
    "emp_thaiaddress_codetype": "3",
    "emp_thaiaddress_full_name": "ต.วัดราชบพิธ อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "emp_thaiaddress_id": "100104",
    "emp_thaiaddress_name": "สำราญราษฎร์",
    "emp_thaiaddress_chwpart": "10",
    "emp_thaiaddress_amppart": "01",
    "emp_thaiaddress_tmbpart": "04",
    "emp_thaiaddress_codetype": "3",
    "emp_thaiaddress_full_name": "ต.สำราญราษฎร์ อ.เขตพระนคร จ.กรุงเทพมหานคร"
  },
  {
    "emp_thaiaddress_id": "100105",
    "emp_thaiaddress_name": "ศาลเจ้าพ่อเสือ",
    "emp_thaiaddress_chwpart": "10",
    "emp_thaiaddress_amppart": "01",
    "emp_thaiaddress_tmbpart": "05",
    "emp_thaiaddress_codetype": "3",
    "emp_thaiaddress_full_name": "ต.ศาลเจ้าพ่อเสือ อ.เขตพระนคร จ.กรุงเทพมหานคร"
  }
]
```
