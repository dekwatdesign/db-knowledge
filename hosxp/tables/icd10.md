# `icd10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(7) | NO | PRI |  |  |  |
| name | varchar(200) | YES | MUL | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| tname | varchar(150) | YES |  | NULL |  |  |
| code3 | char(3) | YES | MUL | NULL |  |  |
| code4 | char(1) | YES | MUL | NULL |  |  |
| code5 | char(1) | YES | MUL | NULL |  |  |
| sex | int(11) | YES |  | NULL |  |  |
| ipd_valid | char(1) | YES |  | NULL |  |  |
| icd10compat | char(1) | YES |  | NULL |  |  |
| icd10tmcompat | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code3 | code3 | no | 1 |
| ix_code4 | code4 | no | 1 |
| ix_code5 | code5 | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "A00",
    "name": "Cholera",
    "spclty": "01",
    "tname": "อหิวาตกโรค",
    "code3": "A00",
    "code4": null,
    "code5": "",
    "sex": null,
    "ipd_valid": null,
    "icd10compat": "Y",
    "icd10tmcompat": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A000",
    "name": "Cholera due to Vibrio cholerae 01, biovar cholerae",
    "spclty": "01",
    "tname": "อหิวาตกโรคแท้",
    "code3": "A00",
    "code4": "0",
    "code5": "",
    "sex": null,
    "ipd_valid": null,
    "icd10compat": "Y",
    "icd10tmcompat": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A001",
    "name": "Cholera due to Vibrio cholerae 01, biovar eltor",
    "spclty": "01",
    "tname": "อหิวาตกโรคเอลทอร์",
    "code3": "A00",
    "code4": "1",
    "code5": "",
    "sex": null,
    "ipd_valid": null,
    "icd10compat": "Y",
    "icd10tmcompat": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A009",
    "name": "Cholera, unspecified",
    "spclty": "01",
    "tname": "อหิวาตกโรค ที่มิได้ระบุรายละเอียด",
    "code3": "A00",
    "code4": "9",
    "code5": "",
    "sex": null,
    "ipd_valid": null,
    "icd10compat": "Y",
    "icd10tmcompat": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A01",
    "name": "Typhoid and paratyphoid fevers",
    "spclty": "01",
    "tname": "ไข้รากสาดน้อย(ไทฟอยด์) และไข้รากสาดเทียม(พาราไทฟอยด์)",
    "code3": "A01",
    "code4": null,
    "code5": "",
    "sex": null,
    "ipd_valid": null,
    "icd10compat": "Y",
    "icd10tmcompat": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A010",
    "name": "Typhoid fever",
    "spclty": "01",
    "tname": "ไข้รากสาดน้อย(ไทฟอยด์)",
    "code3": "A01",
    "code4": "0",
    "code5": "",
    "sex": null,
    "ipd_valid": null,
    "icd10compat": "Y",
    "icd10tmcompat": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A011",
    "name": "Paratyphoid fever A",
    "spclty": "01",
    "tname": "ไข้รากสาดเทียม(พาราไทฟอยด์)เอ",
    "code3": "A01",
    "code4": "1",
    "code5": "",
    "sex": null,
    "ipd_valid": null,
    "icd10compat": "Y",
    "icd10tmcompat": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A012",
    "name": "Paratyphoid fever B",
    "spclty": "01",
    "tname": "ไข้รากสาดเทียม(พาราไทฟอยด์)บี",
    "code3": "A01",
    "code4": "2",
    "code5": "",
    "sex": null,
    "ipd_valid": null,
    "icd10compat": "Y",
    "icd10tmcompat": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
