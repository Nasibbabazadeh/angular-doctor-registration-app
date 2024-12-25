<div *ngIf="prescriptionData && prescriptionData.isCardActive===true" class="data-container">

    <div class="blank-info">
        <div>
            <span><b>Sığorta olunan:</b></span>
            <span> {{prescriptionData.insuredName}} </span>
        </div>
        <div>
            <span><b>Şirkət:</b></span>
            <span> {{prescriptionData.policyInsuredName}} </span>
        </div>
        <div>
            <span><b>Sığorta kartı:</b></span>
            <span> {{prescriptionData.cardFullNumber}}</span>
        </div>
        <div>
            <span><b>Təminat üzrə qalıqlar:</b></span>
            <span>
                <span *ngFor="let pl of programLimits" nz-tooltip="{{pl.templateName}}:{{pl.programName}}">
                    <i *ngFor="let s of pl.serviceIdList; let i=index">
                        {{pharmacyServices.get(s)}} {{ i== (pl.serviceIdList.length-1) ? '' : '+' }}
                    </i>
                    : &nbsp;
                    <span *ngIf="pl.sumLimit>0 && pl.remainderSum>0" style="color: green;">
                        {{(pl.remainderSum | number:'1.2-2')}}&nbsp;₼
                    </span>
                    <span *ngIf="pl.sumLimit==0 && pl.remainderSum==0" style="color: green;">
                        Məhdudiyyət yoxdur
                    </span>
                    <span *ngIf="pl.sumLimit>0 && pl.remainderSum<=1" style="color: red;">
                        Təminat bitib
                    </span>
                    <br>
                </span>
            </span>
        </div>
        <div>
            <span><b>Blank üzrə üm ödəniş:</b></span>
            <span>{{ prescriptionData.usedSum | number:'1.2-2'}}&nbsp;₼</span>
        </div>
        <div>
            <span><b>Azadolma/Qeyd:</b></span>
            <span>{{ replaceBySpace(prescriptionData.groupDeductible) }}</span>
        </div>
        <div>
            <span><b>İstisnalar:</b></span>
            <span>{{ prescriptionData.groupPublicDescr }}</span>
        </div>
        <div>
            <span><b>Aptek üçün qeyd:</b></span>
            <span>{{ prescriptionData.notes }}</span>
        </div>
        <div>
            <span><b>Diaqnoz:</b></span>
            <span>{{ prescriptionData.descr }}</span>
        </div>
        <div>
            <span><b>Əlavə qeydlər:</b></span>
            <span>{{ prescriptionData.additionalDiagnosisNotes }}</span>
        </div>
        <div>
            <span><b>Blank statusu:</b></span>

            <span *ngIf="prescriptionData.approvementStatus == -1">
                Bilinmir
            </span>
            <ng-container *ngFor="let item of prescriptionStatusData">
                <nz-tag *ngIf="prescriptionData.approvementStatus == item.approvementStatus" nzColor={{item.nzColor}}>
                    <span nz-icon nzType={{item.nzType}} nzSpin={{item.nzSpin}}></span>
                    {{ prescriptionData.approvementStatusText }}
                </nz-tag>
            </ng-container>
        </div>
    </div>
</div>
