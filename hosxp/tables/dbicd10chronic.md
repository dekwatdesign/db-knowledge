# `dbicd10chronic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ICD_10 | varchar(255) | NO | PRI |  |  |  |
| ICD_Name_Thai | varchar(255) | YES |  | NULL |  |  |
| ICD_Name_Eng | varchar(255) | YES |  | NULL |  |  |
| IDCode_DBCode | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_idcode_dbcode | IDCode_DBCode | no | 1 |
| PRIMARY | ICD_10 | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ICD_10": "A00",
    "ICD_Name_Thai": "อหิวาตกโรค",
    "ICD_Name_Eng": "Cholerao",
    "IDCode_DBCode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ICD_10": "A000",
    "ICD_Name_Thai": "อหิวาตกโรคจากเชื้อ วิบริโอ คอเลเร โอ หนึ่ง ไบโอวาร์ คอเลเร",
    "ICD_Name_Eng": "Cholera due to Vibrio cholerae, biovar cholerae",
    "IDCode_DBCode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ICD_10": "A001",
    "ICD_Name_Thai": "อหิวาตกโรคจากเชื้อ วิบริโอ คอเลเร โอ หนึ่ง ไบโอวาร์ เอลทอร์",
    "ICD_Name_Eng": "Cholera due to Vibrio cholerae, biovar eltor",
    "IDCode_DBCode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ICD_10": "A009",
    "ICD_Name_Thai": "อหิวาตกโรค ที่มิได้ระบุรายละเอียด",
    "ICD_Name_Eng": "Cholera unspecified",
    "IDCode_DBCode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ICD_10": "A01",
    "ICD_Name_Thai": "ไข้รากสาดน้อย(ไทฟอยด์)และไข้รากสาดเทียม(พาราไทฟอยด์)",
    "ICD_Name_Eng": "Typhoid and paratyphoid fevers",
    "IDCode_DBCode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ICD_10": "A010",
    "ICD_Name_Thai": "ไร้รากสาดน้อย(ไทฟอยด์)",
    "ICD_Name_Eng": "Typhoid fever",
    "IDCode_DBCode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ICD_10": "A011",
    "ICD_Name_Thai": "ไข้รากสาดเทียม(พาราไทฟอยด์)เอ",
    "ICD_Name_Eng": "Paratyphoid fever A",
    "IDCode_DBCode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ICD_10": "A012",
    "ICD_Name_Thai": "ไข้รากสาดเทียม(พาราไทฟอยด์)บี",
    "ICD_Name_Eng": "Paratyphoid fever B",
    "IDCode_DBCode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
