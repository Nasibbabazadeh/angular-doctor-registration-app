<div class="blank-info">
  <ng-container *ngFor="let item of prescriptionDetails">
    <div>
      <span><b>{{ item.label }}:</b></span>
      <span [innerHTML]="item.value"></span>
    </div>
  </ng-container>
</div>

<!-- Component Logic -->
export class PrescriptionInfoComponent {
  prescriptionDetails = [
    { label: 'Sığorta olunan', value: prescriptionData.insuredName },
    { label: 'Şirkət', value: prescriptionData.policyInsuredName },
    { label: 'Sığorta kartı', value: prescriptionData.cardFullNumber },
    { label: 'Blank üzrə üm ödəniş', value: `${prescriptionData.usedSum | number:'1.2-2'} ₼` },
    { label: 'Azadolma/Qeyd', value: replaceBySpace(prescriptionData.groupDeductible) },
    { label: 'İstisnalar', value: prescriptionData.groupPublicDescr },
    { label: 'Aptek üçün qeyd', value: prescriptionData.notes },
    { label: 'Diaqnoz', value: prescriptionData.descr },
    { label: 'Əlavə qeydlər', value: prescriptionData.additionalDiagnosisNotes },
    { label: 'Blank statusu', value: this.getStatusTag() }
  ];

  getStatusTag(): string {
    if (prescriptionData.approvementStatus == -1) return 'Bilinmir';
    const status = prescriptionStatusData.find(
      item => item.approvementStatus == prescriptionData.approvementStatus
    );
    return status
      ? `<nz-tag nzColor=${status.nzColor}><span nz-icon nzType=${status.nzType}></span> ${prescriptionData.approvementStatusText}</nz-tag>`
      : '';
  }
}
